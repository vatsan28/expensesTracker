var express = require('express'),
    app = express();
var cors = require('cors');
var mongoClient= require('mongoose');

// if (process){
//     console.log(process.env);
// } else {
//     var process={};
//     process.env={'DB_URI' : "mongodb://localhost/trackperex"};
// }

console.log(process.env.DB_URI);
mongoClient.connect(process.env.DB_URI);
app.use(cors({origin: '*'}));

/*
This is to setup the server related functions of the app.
 */
var http = require('http'),
    server= http.Server(app),
    normalizePort = require('normalize-port'),
    logger = require('morgan'),
    router = require('./routes/index');
var bodyParser = require('body-parser');
var port = normalizePort(process.env.PORT || '8888');
server.listen(port,function(){
    console.log('Accepting connections @ ',port);
});

server.on('error', onError);
server.on('connection',function(){
    console.log('accepted new connection');
});

app.set('trust proxy', 1);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
    console.log('new request:',req.url,req.method);
    next();
});

app.use('/',router);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}