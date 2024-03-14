const express = require('express');

const server = express();

server.get("/hello", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;

    return res.json({
        title: "Hello World",
        mensagem: `Olá ${nome}`,
        idade: idade
    })
})

server.get("/hello/:nome", (req, res) => {
    const nome = req.query.nome;

    return res.json({
        title: "Hello World",
        mensagem: `Olá ${nome}`,
    })
})
server.listen(3000);

