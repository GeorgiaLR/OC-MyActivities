// Appelle le module url
var url = require('url');
// Module qui parse la chaine des paramètres de l'url
var queryString = require('querystring');
// Module de routing
var express = require('express');
var bodyParser = require('body-parser');
var todoCrud = require('./Todolist/todo');

var app = express();
// Appelle le module http
var http = require('http').createServer(app);
  
// Chargement de socket.io
var io = require('socket.io')(http);

var cookieParser = require("cookie-parser");

var session = require("express-session")({
    secret: "nodeAppSessionKey",
    resave: true,
    saveUninitialized: true
});
var sharedsession = require("express-socket.io-session");

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
extended: true
})); 
//app.use(cookieParser);
app.use(session);


app.get('/', (req, res) => {
    res.render('home.ejs');
  });

app.get('/chat', (req, res) => {
    res.render('chat.ejs');
  });

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


// Use shared session middleware for socket.io
// setting autoSave:true
io.use(sharedsession(session, {
    autoSave:true
})); 




// Quand un client se connecte, on le note dans la console
io.on('connection', function (socket) {

    console.log("Guest connected");

    socket.on('connection', () => {
        io.emit('chat message', "Welcome guest !");
    });
    
    //socket.broadcast.emit("message", "Welcome guest !");
        
    // Accept a login event with user's data
    socket.on("login", function(userdata) {
        console.log('user connected');
        socket.handshake.session.userdata = userdata;
        socket.handshake.session.save();
    });

    socket.on("logout", function(userdata) {
        console.log('user disconnected');
        if (socket.handshake.session.userdata) {
            delete socket.handshake.session.userdata;
            socket.handshake.session.save();
        }
    });        


    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

});



http.listen(8080);