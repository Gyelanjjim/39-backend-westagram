const postService = require('../services/post.service');

const createPost = async (req, res, next) => {
  const { title, content, imageUrl, userId } = req.body;

  await postService.createPost(title, content, imageUrl, userId);

  res.status(201).json({ message: 'postCreated' });
};

const getPost = async (req, res, next) => {
  const data = await postService.getPost();

  res.status(200).json({ data: data });
};

const getPostByUserId = async (req, res, next) => {
  const { userId } = req.params;

  const data = await postService.getPostByUserId(userId);

  res.status(200).json(data);
};

const updatePostByUserId = async (req, res, next) => {
  const { userId, postId } = req.params;
  const { content } = req.body;

  const data = await postService.updatePostByUserId(content, userId, postId);

  res.status(200).json({ data: data });
};

const deletePost = async (req, res, next) => {
  const { postId } = req.params;

  await postService.deletePost(postId);

  res.status(204).end();
};

module.exports = {
  createPost,
  getPost,
  getPostByUserId,
  updatePostByUserId,
  deletePost,
};
