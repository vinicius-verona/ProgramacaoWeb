const express = require("express");
require('dotenv').config();


const app = express();
const port = process.env.PORT | 3000;
// const port = 3000;

let options = {
  index: 'index.html'
}


app.use(express.json());
app.use(express.static('./src/dist', options))

app.use(require('./routes.js'));

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});