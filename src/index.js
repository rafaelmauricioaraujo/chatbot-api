const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const watson = require('../src/watson/client-watson');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.post('/mensagem/', (req, res) => {
    const { text, context = {} } = req.body;

    const params = {
        input: { 'Quero comprar um celular' },
        workspace_id: '4fcb222b-423a-4607-a758-d6dbb461b1a0',
        context,
    };

    watson.message(params, (err, response) => {
        if (err) res.status(500).json(err);
        res.json(response);
    });
});
