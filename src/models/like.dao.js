const { appDataSource } = require('./dataSource');

const isExistLike = async (userId, postId) => {
  const [isExist] = await appDataSource.query(
    `SELECT EXISTS(
        SELECT *
            FROM likes
            WHERE user_id = ? and post_id = ? 
    ) AS isExist;
    `,
    [userId, postId]
  );
  return isExist;
};

const createLike = async (userId, postId) => {
  await appDataSource.query(
    `INSERT INTO likes(
        user_id, 
        post_id
    ) VALUES ( ?, ? );
    `,
    [userId, postId]
  );
};

const deleteLike = async (userId, postId) => {
  await appDataSource.query(
    `DELETE 
    FROM likes
    WHERE user_id = ? and post_id = ?; 
    `,
    [userId, postId]
  );
};

module.exports = { isExistLike, createLike, deleteLike };
