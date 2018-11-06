const express   = require('express');
const app       = express();
const port      = 3000;

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));

app.listen(port, () => console.log(`MAPLE server on port ${port}!`));

app.post('/join-poll', function(req, res){
    console.log(req);
    res.send("Hello");
});