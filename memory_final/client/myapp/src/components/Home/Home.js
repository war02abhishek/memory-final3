import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Toolbar, IconButton, Typography } from "@material-ui/core";
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";

import Pagination from '../Pagination'
import { useNavigate, useLocation } from 'react-router-dom'; //use location will be used to know on which page we are curretly

import ChipInput from 'material-ui-chip-input'

import useStyles from './styles';
import App from '../../App';

//on what page we are currently are
function useQuery() {
  return new URLSearchParams(useLocation().search);//this allow us to use simply as a Hook
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();

  const page = query.get('page') || 1; //this will read url and see if there is page parameter in url if not then it must be on page=1
  const searchQuery = query.get('searchQuery');//similarly with seacrh query

  console.log("hi i am home");

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch, currentId]);

  const [search, setSearch] = useState('');
  const [Tags, setTags] = useState([]);



  const handleAdd = (tag) => {
    setTags([...Tags, tag])
  };


  const handleDelete = (tagToDelete) => {
    setTags(Tags.filter((tag) => tag !== tagToDelete)); //[Tags.filter((tag)=>tag!==tagToDelete)] if we do like this even if we delee all tags ther ill always an empty array tag
  };
  const searchPost = () => {

    if (search.trim() || Tags) {
      ///dispatch search posts
      console.log('searchPost dispatch with search and tags');
      // console.log(search);
      // console.log(Tags);
      dispatch(getPostsBySearch({ search, Tags: Tags.join(',') }))

      navigate(`/posts/search?searchQuery= ${search || 'none'}&Tags=${Tags.join(',')}/`);//why do we need this client side routing //to give user good experience if he want to share name with tag from which he got that particular post

    } else {
      navigate('/');

    }

  };
  //  const handleAdd = (tag) => setTags([...Tags, tag]);

  //  const handleDelete = (chipToDelete) =>
  //    setTags(Tags.filter((tag) => tag !== chipToDelete));


  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      console.log("handleKeyPress");
      searchPost();
    }
  };
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.gridContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          {/* in xtra small device take full screen(12/12) smaller devices take half(6/12) and in moderate devices take (9/12) */}
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                id="standard-basic"
                label="Search Memories"
                variant="standard"
                onKeyPress={handleKeyPress}
                onChange={(e) => {
                  setSearch(e.target.value);
                  // console.log(search);
                }}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={Tags}
                onAdd={(chip) => handleAdd(chip)}
                onDelete={(chip) => handleDelete(chip)}
                label="Search Tags"
                variant="standard"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={searchPost}
                className={classes.Button}
              >
                Search
              </Button>
            </AppBar>

            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} elevation={6}>
              <Pagination page={page} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home