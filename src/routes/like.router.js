const likeRouter = require("express").Router();
const likeController = require("../controllers/like.controller");

likeRouter.post(
  "/userId/:userId/postId/:postId",
  likeController.createOrDeleteLike
);

module.exports = { likeRouter };
