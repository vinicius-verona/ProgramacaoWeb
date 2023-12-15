const express = require('express');
const routes = express.Router();


routes.post('/', async (req, res) => {

  let input = req.body.text;
  let isuppercase = req.body.isuppercase | false;

  if (input) {
    res.status(200)
    return res.send(JSON.stringify({ text: isuppercase ? input.toUpperCase() : input.toLowerCase() }))
  }

  res.status(400);
  return res.send();

});

module.exports = routes;