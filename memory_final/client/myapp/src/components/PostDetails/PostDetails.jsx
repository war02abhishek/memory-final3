import React, { useEffect } from 'react'
import {Typography,Paper,CircularProgress,Divider} from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import moment from 'moment'
import {useParams,useNavigate} from 'react-router-dom';

import useStyles from './styles'
import {getPost,getPostsBySearch} from '../../actions/posts'
import CommentSection from './CommentSection';
import SinglePostSkeleton from '../../Skelton/SinglePostSkeleton/SinglePostSkeleton'
const PostDetails=()=> {

  const {post,posts,isLoading}=useSelector((state)=>state.posts)
  
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const classes=useStyles();
  const {id}=useParams();


useEffect(()=>
{
  console.log(id);
  dispatch(getPost(id));
},[id])
console.log(posts);
    console.log(post)


 useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', Tags: post?.tags.join(',') }));
    }
  }, [post]);







if(!post)  return null;
const openPost = (_id) => navigate(`/posts/${_id}`);
console.log(post);
  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
       <div
             style={{  width: "1200px", padding: "40px" }}
           >
             <SinglePostSkeleton />
           </div>
      </Paper>
    );
  }

  console.log(post._id);
  console.log(id);
  console.log(posts);
  // const reccomendedPosts=posts.filter((post)=>post._id==posts._id)
const recommendedPosts = posts;
// console.log(recommendedPosts);
// const recommendedPosts = posts.filter((id) => id !== post._id);

// console.log(recommendedPosts);
  return (
     <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2" className={classes.tittle} >{post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection post={post}/>
          <Divider style={{ margin: '20px 0' }} />
        
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>






      </Paper>
  )
}

export default PostDetails