// Appelle le module http
var http = require('http');
// Appelle le module url
var url = require('url');
// Module qui parse la chaine des paramètres de l'url
var queryString = require('querystring');
// Module de routing
var express = require('express');
var bodyParser = require('body-parser')

var todoCrud = require('./Todolist/todo')

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/todolist', function(req, res) {
    var tasks = todoCrud.getAllTasks();
    console.log("/todolist");
    res.render('todolist.ejs', {tasks});
});

app.post('/todolist/add', function(req, res){
    console.log("/todolist/add");

    todoCrud.addTask(req.body);
    
    res.redirect('/todolist');

});

app.post('/todolist/edit', function(req, res){
    console.log("/todolist/edit");

    try {
        todoCrud.editTask(req.body);
        res.redirect('/todolist');
        
    }
    catch(e) {
        console.log(e);
    }

});

app.delete('/todolist/delete/:taskid', function(req, res){
    console.log("/todolist/delete/:taskid");

    console.log(req.params.taskid);
    try {
        todoCrud.removeTask(req.params.taskid);
        res.redirect('/todolist');
    }
    catch(e) {
        console.log(e);
    }

});


app.listen(8080);