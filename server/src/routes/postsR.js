// import { Router } from 'express'

// const router = new Router()
import express from "express";
import { authMid } from '../middlewares/authMid.js';
import { createPost, getAllPost,getPostById,updatePost,getMyPosts,deleteOnePost,getPostComments} from "../controllers/posts.ctrl.js";

const router = express.Router({ mergeParams: true });
// Create Post
// http://localhost:6000/api/posts
router.post('/', authMid, createPost)

// Get All Posts
// http://localhost:6000/api/posts
router.get('/', getAllPost)

// Get Post By Id
// http://localhost:6000/api/posts/:id
router.get('/:id', getPostById)

// Update Post
// http://localhost:6000/api/posts/:id
router.put('/:id', authMid, updatePost)

// Get My Posts
// http://localhost:6000/api/posts/user/me
router.get('/user/me', authMid, getMyPosts)

// Remove Post
// http://localhost:6000/api/posts/:id
router.delete('/:id', authMid, deleteOnePost)

// Get Post Comments
// http://localhost:6000/api/posts/comments/:id
router.get('/comments/:id', getPostComments)



export default router