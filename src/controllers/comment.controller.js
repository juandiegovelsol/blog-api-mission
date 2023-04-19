import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany();
    if (comments.length >= 1) {
      res.status(200).json(comments);
    } else {
      res.status(204).json({ error: true, message: "No content found" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getOneComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.comment.findUnique({
      where: {
        idcomment: +id,
      },
    });

    if (Object.keys(comment).length > 0) {
      res.status(200).json(comment);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const createComment = async (req, res) => {
  try {
    const newComment = await prisma.comment.create({
      data: req.body,
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const updateOneComment = async (req, res) => {
  try {
    const { id } = req.params;
    const updateComment = await prisma.comment.update({
      where: {
        idcomment: +id,
      },
      data: req.body,
    });
    res.json(updateComment);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const deleteOneComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.comment.delete({
      where: {
        idcomment: +id,
      },
    });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
