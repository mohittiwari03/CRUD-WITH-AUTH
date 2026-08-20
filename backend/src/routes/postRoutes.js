import express from "express";
import {
  createPost,
  getPost,
  getPostById,
  updatePost,
  deletPost,
  getMyPosts,
} from "../controllers/postController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createPost).get(protect, getPost);

router.route("/my-posts").get(protect, getMyPosts);

router
  .route("/:id")
  .get(protect, getPostById)
  .put(protect, updatePost)
  .delete(protect, deletPost);

export default router;
