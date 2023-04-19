import express from "express";
import postRoutes from "./routes/post.routes.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello blog API" });
});

app.use(express.json());
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

app.listen(PORT, () => {
  console.log("Initialized blog server...");
});
