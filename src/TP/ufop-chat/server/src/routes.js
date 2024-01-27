const express = require('express');
const routes = express.Router();


routes.post('/chat-api/', (req, res) => {

  const response = "[ ATENÇÃO ] Isso é uma resposta padrão adquirida pela API do CHAT UFOP, desenvolvido pelo DECOM. A API ainda está em desenvolvimento e portanto não é possível usá-la."

  res.status(200);
  res.send(JSON.stringify({ req: req.body.input, res: response }));

});

module.exports = routes;