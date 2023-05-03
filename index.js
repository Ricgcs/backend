const express = require('express');
const server = express();
const jogos = require('./src/data/jogos.json');
const favoritos = require('./src/data/favoritos.json');

server.get('/jogos', (req, res) =>{
    return res.json(jogos)
});

server.get('/favoritos',(req,res) =>{
    return res.json(favoritos)

});

server.listen(3000, () =>{
    console.log('Servidor funcionando...');
})