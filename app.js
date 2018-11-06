const express   = require('express');
const bp        = require('body-parser');
const createHTML= require('create-html');
const fs        = require('fs');
const app       = express();
const port      = 3000;

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));
app.use(bp.urlencoded());

app.post('/join-poll', function(req,res){
    const poll_code = req.body['code'];
    const file      = poll_code + ".html";
    const fileName  = "public/" + file;

    console.log(fileName);
    if (fs.existsSync(fileName)) {
        console.log("FOUND!");
        res.send(file);
    }else{
        console.log("LOL");
        res.json({error: true})
    }
});

app.post('/create-poll', function(req, res){
    const poll_code = req.body['code'];
    const fileName  = poll_code + ".html";
    const file      = "public/" + fileName;

    const html = createHTML({
        title: "Poll " + poll_code,
        css: 'example.css',
        lang: 'en',
        body: '<p>example</p>'
    });

    fs.writeFile(file, html, function (err){});
    res.send(fileName);
});

app.listen(port, () => console.log(`MAPLE server on port ${port}!`));
