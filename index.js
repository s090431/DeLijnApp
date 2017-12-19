const express = require('express');
const request = require('request');
const app = express();

const bodyParser = require('body-parser');

const halte = require('./halte');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/static', express.static('./node_modules/font-awesome'));

// set the view engine to ejs
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  console.log(req.query)
  if(req.query.halte_id && req.query.num_results){
    // /?halte_id=200144&num_results=5
    halten(req, res)
  }
  else{
    //Geen QueryParams => Lege startpagina
    res.render('index', {
    })
  }
})

app.get('/home', function(req, res) {
    res.render("home", {});
});

app.get('/aanmelden', function(req, res) {
    res.render("aanmelden", {});
});

app.get('/registreren', function(req, res) {
    res.render("registreren", {});
});

app.get('/halte', function(req, res) {
    halte(req,res)
});

app.get('/instellingen', function(req, res) {
    res.render("instellingen", {});
});

app.get('/routeDetail', function(req, res) {
    res.render("routeDetail", {});
});

app.get('/routePlanner', function(req, res) {
    res.render("routePlanner", {});
});

app.get('/routeTijden', function(req, res) {
    res.render("routeTijden", {});
});

app.get('/ticket', function(req, res) {
    res.render("ticket", {});
});


// Listen port 4000
console.log("port:4000");
app.listen(4000)
