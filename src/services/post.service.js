const postDao = require('../models/post.dao');

const createPost = async (title, content, imageUrl, userId) => {
  return await postDao.createPost(title, content, imageUrl, userId);
};

const getPost = async () => {
  return await postDao.getPost();
};

const getPostByUserId = async (userId) => {
  return await postDao.getPostByUserId(userId);
};

const updatePostByUserId = async (content, userId, postId) => {
  return await postDao.updatePostByUserId(content, userId, postId);
};

const deletePost = async (postId) => {
  return await postDao.deletePost(postId);
};

module.exports = {
  createPost,
  getPost,
  getPostByUserId,
  updatePostByUserId,
  deletePost,
};
