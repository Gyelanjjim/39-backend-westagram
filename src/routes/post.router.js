const postRouter = require("express").Router();
const postController = require("../controllers/post.controller");

postRouter.post("", postController.createPost);
postRouter.get("", postController.getPost);
postRouter.get("/userId/:userId", postController.getPostByUserId);
postRouter.patch("/:postId/userId/:userId", postController.updatePostByUserId);
postRouter.delete("/:postId", postController.deletePost);

module.exports = { postRouter };
