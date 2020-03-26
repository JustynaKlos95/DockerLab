const express = require('express');

const redis = require('redis');

const app = express();

const process = require('process');

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});;

app.get('/:numberOne/:numberTwo', (req, resp) => {

    const score = req.params.numberOne;
    process.exit(0);
   
    client.get('score', (err, counter) => {
        if(score == null){
            while(numberOne != numberTwo){
                if(numberOne > numberTwo)
                numberOne = numberOne - numberTwo;
                else 
                numberTwo = numberTwo - numberOne;
            } 
            client.send(numberOne);
        }
        client.set('numberOne', parseInt(numberOne));
    });

        

});

app.listen(8081, () => {
    console.log('Server listening on port 8001');
});
