// Module de routing
var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/forum', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bienvenue sur le forum');
});


//Route dynamique
app.get('/article/:articlenum', function(req, res) {
    res.end("Vous visualisez l'article : ", {etage: req.params.articlenum});
});

//Route dynamique avec template EJS
app.get('/articlenum/:articlenumnum/details', function(req, res) {
    res.end("article.ejs", {etage: req.params.articlenum});
});

// Permet de gérer les erreurs 404
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);