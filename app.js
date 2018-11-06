const express   = require('express');
const bp        = require('body-parser');
const createHTML= require('create-html');
const fs        = require('fs');
const app       = express();
const port      = 3000;

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
        head:'\
        <meta charset="UTF-8">\
        <title>POLL 1a234b</title>\
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\
        <style>\
        * {\
            padding: 0;\
            margin: 0;\
        }\
        .center {\
            display: block;\
            margin: auto;\
        }\
        .bottom{\
            position: fixed;\
            bottom: 0;\
            left: 0;\
            right: 0;\
        }\
        </style>',

        body: '\
            <nav class="navbar navbar-light bg-light">\
                <a class="nav-pills" id="back"><</a>\
                <a class="navbar-text center">Poll ' + poll_code + '</a>\
            </nav>\
            <div class="form-check">\
                <input class="form-check-input" type="checkbox" value="" id="input1">\
                <label class="form-check-label" for="input1">Bowling</label><br>\
                <input class="form-check-input" type="checkbox" value="" id="input2">\
                <label class="form-check-label" for="input2">Movies</label><br>\
                <input class="form-check-input" type="checkbox" value="" id="input3">\
                <label class="form-check-label" for="input3">Mall</label><br>\
                <input class="form-check-input" type="checkbox" value="" id="input4">\
                <label class="form-check-label" for="input4">Ice Skating</label><br>\
            </div>\
            <div class="card-footer bottom">\
                <button class="btn btn-primary center" id="submit_vote">SUBMIT</button>\
            </div>\
            <script src="https://code.jquery.com/jquery.js"></script>\
            <script src="js/bootstrap.min.js"></script>\
            <script src="js/index.js"></script>'
    });

    fs.writeFile(file, html, function (err){});
    res.send(fileName);
});

app.listen(port, () => console.log(`MAPLE server on port ${port}!`));
