const express = require('express');
const routes = express.Router();


routes.post('/chat-api/', (req, res) => {



  // res.send(JSON.stringify({ text: "Hello World from Server!" }));

});

module.exports = routes;