const likeDao = require('../models/like.dao');

const createOrDeleteLike = async (userId, postId) => {
  const isExist = await likeDao.isExistLike(userId, postId);
  if (isExist.isExist === '1') {
    await likeDao.deleteLike(userId, postId);

    return 0;
  } else {
    await likeDao.createLike(userId, postId);

    return 1;
  }
};

module.exports = { createOrDeleteLike };
