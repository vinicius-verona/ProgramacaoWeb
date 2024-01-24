const express = require("express");
require('dotenv').config();

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;


const app = express();
const port = process.env.PORT | 3000;

let options = {
  index: 't12.html'
}

app.use(express.json());
app.use(express.static('./src/public/', options))

let collection = null;

async function startServer() {
  const client = new MongoClient(`mongodb://localhost:27017`)

  try {
    // Connecting to the server
    await client.connect();

    // We want to work with the words collection of the vdb database.
    collection = client.db("login-toy").collection("login");


    app.listen(port, () => {
      console.log(`Server is listening to port ${port}`);
    });


  } catch (e) {
    console.error(e);
  }

}

startServer();

app.post('/api/login', async (req, res) => {

  let usr = req.body.user;
  let pwd = req.body.pwd;

  if (!usr || !pwd) {
    res.status(400);
    return res.send({ status: "error" });
  }

  const exists = await collection.findOne({ user: usr, pwd: pwd });

  if (exists) {
    res.status(200);
    return res.send({ status: "success" });
  }

  res.status(401);
  return res.send({ status: "error" });

});

app.post('/api/register', async (req, res) => {

  let usr = req.body.user;
  let pwd = req.body.pwd;

  if (!usr || !pwd) {
    res.status(400);
    return res.send({ status: "error" });
  }

  const exists = await collection.findOne({ user: usr, pwd: pwd });

  if (exists) {
    res.status(400);
    return res.send({ status: "warning" });
  }

  await collection.insertOne({ user: usr, pwd: pwd });

  res.status(200);
  return res.send({ status: "success" });

});
