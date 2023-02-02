const likeService = require('../services/like.service');

const createOrDeleteLike = async (req, res, next) => {
  const { userId, postId } = req.params;

  const data = await likeService.createOrDeleteLike(userId, postId);

  if (data) {
    res.status(201).json({ message: 'likeCreated' });
  } else {
    res.status(204).end();
  }
};

module.exports = { createOrDeleteLike };
