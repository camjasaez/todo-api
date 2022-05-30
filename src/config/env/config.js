const path = require('path');

const configEnv = () => {
  const envFilePath = path.resolve(__dirname, `.env`);
  require('dotenv').config({ path: envFilePath });

  return {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    URI: process.env.URI,
  };
};

module.exports = { configEnv };
