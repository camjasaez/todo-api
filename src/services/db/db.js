const mongoose = require('mongoose');
const { configEnv } = require('../../config/env/config');
const env = configEnv();

const setUpServer = (server) => {
  try {
    mongoose
      .connect(env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() =>
        server.listen(env.PORT, () =>
          console.log(`Server Running on Port: http://localhost:${env.PORT}`)
        )
      )
      .catch((error) => console.log(`${error} did not connect`));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { setUpServer };
// const configEnv = require('./config/env/config');
// const env = configEnv();
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri =
//   env.URI ||
//   'mongodb+srv://admin:AwoCbFhrcj5RsGyW@todo-api-clouster.q78venw.mongodb.net/?retryWrites=true&w=majority';

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// client.connect((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });
