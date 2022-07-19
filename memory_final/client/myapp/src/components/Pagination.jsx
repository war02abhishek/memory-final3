import React,{useEffect} from "react";
import { Pagination, PaginationItem } from '@material-ui/lab';
import useStyles from './styles';
import {Link} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import {getPosts} from "../actions/posts"


const Paginate =(({page})=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    const { numberOfPages } = useSelector((state) => state.posts);

    useEffect(()=>{
  if(page)dispatch(getPosts(page));//we wanrt posts according to page number not all posts
  console.log('page number change so use effect and that dispatch get posts')
},[page])






    return(
       <Pagination

      className={classes.ul }

      // count={3}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="text"
      color="secondary"
      renderItem={(item) => (
        <PaginationItem  {...item} component={Link} to={`/posts?page=${item.page}`} />
      )}
    />
    )

})
export default Paginate;