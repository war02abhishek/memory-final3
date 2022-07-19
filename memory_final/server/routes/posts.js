import express from "express";
// import { getPostsBySearch } from "../../client/myapp/src/actions/posts.js";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
  getPostsBySearch,
  CommentPost,
} from "../controllers/posts.js";

import auth from '../middleware/auth.js'//ab auth se confirmation hone ke baad he like,update,create

const router = express.Router();

router.get("/", getPosts); //wit home page we will get all the posts //all the user can see the post so no need for auth middleware
router.get("/search", getPostsBySearch);
router.post("/",auth,createPost);//but for creating the post you need confirmatin
router.get("/:id", getPost);//get post request
router.patch("/:id",auth,updatePost);
router.delete("/:id",auth, deletePost);
router.patch("/:id/likePost",auth,likePost);
router.post("/:id/CommentPost",CommentPost);

export default router;
