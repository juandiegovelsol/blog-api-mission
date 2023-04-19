import express from "express";
import {
  getAllComments,
  createComment,
  getOneComment,
  updateOneComment,
  deleteOneComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/", getAllComments);
router.get("/:id", getOneComment);
router.post("/", createComment);
router.put("/:id", updateOneComment);
router.delete("/:id", deleteOneComment);

export default router;
