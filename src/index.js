const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const watson = require('../src/watson/client-watson');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get('/mensagem/', (req, res) => {
    const { text, context = {} } = req.body;

    const params = {
        workspace_id: '{83a7daa6-ad77-4f43-934f-13ddaeee7c87}',
        input: { 'text': 'quero fazer um pedido' }
    };

    watson.message(params)
        .then(res => {
            console.log(JSON.stringify(res, null, 2));
        })
        .catch(err => {
            console.log(err)
        });

});


/*
watson.message({
    workspace_id: '{workspace_id}',
    input: { 'text': 'Hello' }
})
    .then(res => {
        console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
        console.log(err)
    });
*/

app.listen(3000);
