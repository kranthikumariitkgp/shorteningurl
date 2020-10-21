var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(9001);

const controller  = require('./controller');
const mongo  = require('./mongo');

const { getURL, createURL} = controller;
const { insertRecord, getRecord} = mongo;

app.post('/createTinyUrl', async function (req, res) {
    const  { body } = req;
    if(body.longUrl && body.timeToLive) {
        const createdResponse = await createURL(body.longUrl, body.timeToLive);
        if(createdResponse) { await insertRecord(createdResponse);
            res.send(createdResponse);
        }
    }
    res.send({message: 'Record Not created'});
});


app.get('/getTinyUrl', async function (req, res) {
    const  { id } = req.query
    if(id) {
        const record = await getRecord(id);
        const link = await getURL(record);
        res.send(link);
        }
    res.send({message: 'Record Not Exists'});
});