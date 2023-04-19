import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllPost = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        comment: {
          select: {
            comment: true,
          },
        },
      },
    });

    const computedPosts = posts.map(
      ({ idpost, postname, postcontent, comment }) => {
        const comments = comment.map((item) => item.comment);
        return {
          idpost,
          postname,
          postcontent,
          comments,
        };
      }
    );
    if (computedPosts.length >= 1) {
      res.status(200).json(computedPosts);
    } else {
      res.status(204).json({ error: true, message: "No content found" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = await prisma.post.create({
      data: req.body,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
