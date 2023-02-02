const { appDataSource } = require('./dataSource');

const createPost = async (title, content, imageUrl, userId) => {
  await appDataSource.query(
    `INSERT INTO posts(
        title,
        content,
        image_url,
        user_id
    ) VALUES ( ?, ?, ?, ? );
    `,
    [title, content, imageUrl, userId]
  );
};

const getPost = async () => {
  const post = await appDataSource.query(
    `SELECT 
        users.id as userId, 
        users.profile_image as userProfileImage, 
        posts.id as postingId, 
        posts.image_url as postingImageUrl, 
        posts.content as postingContent 
    FROM users 
    INNER JOIN posts 
    ON users.id = posts.user_id
    `
  );
  return post;
};

const getPostByUserId = async (userId) => {
  const data = await appDataSource.query(
    `SELECT 
        users.id as userId,
        users.profile_image as userProfileImage,
        JSON_ARRAYAGG(
            JSON_OBJECT(
            "postingId",posts.id,
            "postingImageUrl", posts.image_url,
            "postingContent",posts.content
            )
        ) as postings 
    FROM users 
    INNER JOIN posts 
    ON users.id = posts.user_id 
    WHERE users.id = ?
    GROUP BY users.id;
    `,
    [userId]
  );

  const result = data.map((el) => ({
    ...el,
    postings: JSON.parse(el.postings),
  }));

  return result;
};

const updatePostByUserId = async (content, userId, postId) => {
  await appDataSource.query(
    `UPDATE 
        posts 
    SET content = ? 
    WHERE user_id = ? and id = ?;
    `,
    [content, userId, postId]
  );

  const result = await appDataSource.query(
    `SELECT 
        users.id as userId, 
        users.name as userName, 
        posts.id as postingId, 
        posts.title as postingTitle, 
        posts.content as postingContent 
    FROM users 
    INNER JOIN posts 
    ON users.id = posts.user_id
    WHERE users.id = ? and posts.id = ?;
    `,
    [userId, postId]
  );

  return result;
};

const deletePost = async (postId) => {
  await appDataSource.query(
    `DELETE
    FROM likes
    WHERE post_id = ?;
    `,
    [postId]
  );

  await appDataSource.query(
    `DELETE 
    FROM posts
    WHERE id = ?; 
    `,
    [postId]
  );
};

module.exports = {
  createPost,
  getPost,
  getPostByUserId,
  updatePostByUserId,
  deletePost,
};
