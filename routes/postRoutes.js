import express from "express";
import { createPost, getAllPosts, updatePost, deletePost, getSinglePost } from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createPost); // protected
router.get("/", getAllPosts);           // public
router.put("/:id", protect, updatePost); // protected
router.delete("/:id", protect, deletePost); // protected
router.get("/:id", getSinglePost);

export default router;
