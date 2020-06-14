
// Appelle le module http
var http = require('http');
// Appelle le module url
var url = require('url');
// Module qui parse la chaine des paramètres de l'url
var queryString = require('querystring');


/*
// Crée le serveur
var server = http.createServer(function(req, res) {

  // Renvoie à l'user le code 200 = OK et renvoie des data html
  res.writeHead(200, {"Content-Type": "text/html"});
  // Renvoie à l'user un message
  res.write('<!DOCTYPE html>'+
  '<html>'+
  '    <head>'+
  '        <meta charset="utf-8" />'+
  '        <title>Ma page Node.js !</title>'+
  '    </head>'+ 
  '    <body>'+
  '     	<p>Bienvenue sur le serveur</p>'+
  '    </body>'+
  '</html>');
  // Fin de la réponse
  res.end();
});
*/

// Renvoie une réponse en fonction des paramètres
var server = http.createServer(function(req, res) {

  // Renvoie un tableau de paramètres
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


// server.on('request', function(req, res) { });
server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
});

server.listen(8080);

//server.close();

/*
// Récupérer la page et afficher un message distinct
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