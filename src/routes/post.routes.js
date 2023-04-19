import express from "express";
import { getAllPost, createPost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getAllPost);
router.post("/", createPost);

export default router;
