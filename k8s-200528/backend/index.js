const keys = require('./keys');
const { v4: uuidv4} = require('uuid');

const express = require('express');

const app = express();

const appId = uuidv4();
const appPort = 5000;

const redis = require('redis');

console.log('keys: = ',keys);

const redisClient = redis.createClient = ({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

app.get('/', (req, resp) =>{
    resp.send(`Hello from backend`);
});

app.get('/randomUUID', (req, resp) =>{
    resp.send(`Random Id: [${appId}] [${keys.redisHost}]`);
});

app.listen(appPort, err => {
    console.log(`Backend listening port -> ${appPort}`);
});
