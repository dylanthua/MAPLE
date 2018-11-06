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
        title: "Poll " + poll_code,
        css: 'css/bootstrap.css',
        lang: 'en',
        body: '\
            <nav class="navbar navbar-light bg-light">\
                <a class="nav-pills" id="back"><</a>\
                <a class="navbar-text center">Poll 1a234b</a>\
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
                <input class="form-check-input" type="checkbox" value="" id="input5">\
                <label class="form-check-label" for="input5">Batting Cage</label><br>\
                <input class="form-check-input" type="checkbox" value="" id="input6">\
                <label class="form-check-label" for="input6">Pumpkin Patch</label><br>\
                <input class="form-check-input" type="checkbox" value="" id="input7">\
                <label class="form-check-label" for="input7">Park</label><br>\
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
