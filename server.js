const express = require('express');
const escapeHtml = require('escape-html');
const app = express();

let texto = "";

app.get('/', (req, res) => {
    console.log('El usuario llamó a /');
    res.send('Hola mundo');
});

app.get('/grab', (req,res) => {
    const data = escapeHtml(req.query.data);
    texto += data;
    res.send(data);
})

app.get('/read', (req,res) => {
    res.send(escapeHtml(texto));
})


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});