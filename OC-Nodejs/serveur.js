var http = require('http');
var url = require('url');
var queryString = require('querystring');

// server.on('request', function(req, res) { });
var server = http.createServer(function(req, res) {

  res.writeHead(200, {"Content-Type": "text/html"});
  
    res.write('Je me connecte au serveur');


  res.end();
});


server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
});

server.listen(8080);

server.close();


/*

var server = http.createServer(function(req, res) {

  var params = queryString.parse(url.parse(req.url).query);

  res.writeHead(200, {"Content-Type": "text/html"});
  
  if ('prenom' in params && 'nom' in params) {
    res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
}
else {
    res.write('Vous devez bien avoir un prénom et un nom, non ?');
}

  res.end();
});


var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/html"});
    
    if (page == "/"){
      res.write('Bonjour vous êtes à l\'accueil');
    }
    else if (page == "/forum"){
      res.write("Bienvenue sur le forum");
    }
    else if (page == "/forum/private"){
      res.write("Dsl c'est privé !");
    }
    else {
      res.write("Erreur 404");
    }

    res.end();
});
server.listen(8080);


 Code identique au précédent

var instructionsNouveauVisiteur = function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('Salut tout le monde !');
  }
  
  var server = http.createServer(instructionsNouveauVisiteur);*/