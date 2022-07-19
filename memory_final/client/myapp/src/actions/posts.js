import {
  FETCH_ALL,
  FETCH_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  START_LOADING,
  END_LOADING,
  FETCH_POST
} from "../constants/actionTypes";
//????? WHY HERE WE DONT IMPORT USE DISPATCH 

import * as api from "../api/index.js";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    console.log(data);
    console.log(
      "doing get post request "
    );
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};







export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({type:START_LOADING});
    const { data } = await api.fetchPosts(page);
    console.log(data);
console.log('doing get posts request so that i can get data from data base');
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error);
  }
};
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {data} = await api.fetchPostsBySearch(searchQuery);
    console.log(
      "doing get posts by Search request so that i can get data according to search parameters from data base"
    );
    console.log(data);
    console.log(data.posts);
     dispatch({ type: FETCH_SEARCH, payload: {data} });
     dispatch({ type: END_LOADING });
       
  } catch (error) {
    console.log(error);
  }
};
export const commentPost = (finalComment,id) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
      console.log("doing post comment action");
    const { data } = await api.comment(finalComment,id);
    console.log('data after api call')
    console.log(data);
  
   dispatch({ type: 'COMMENT', payload: data });
   return data.comments;
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};




export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
console.log("doing create posts request  so that i can push data to data base");

    dispatch({ type: CREATE, payload: data }); //apne store mai daaldo
   
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
console.log("doing update posts request so that i can get data from data base to update");
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id); //accha like karne hai API ke pass bhejdo vo like karke de dega
console.log(
  "doing like posts request so that i can increse like number data from data base to update"
);
    dispatch({ type: LIKE, payload: data }); //like karke dene ke baad apne store mai daaldo
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

