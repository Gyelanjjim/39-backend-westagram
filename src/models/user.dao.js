const { appDataSource } = require("./dataSource");

const signup = async (name, email, profileImage, password) => {
  await appDataSource.query(
    `
        INSERT INTO users(
            name, 
            email,
            profile_image,
            password
        ) VALUES (?, ?, ?, ?);
        `,
    [name, email, profileImage, password]
  );
};

module.exports = { signup };
