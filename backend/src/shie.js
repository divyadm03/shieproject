 var express = require('express');
var app = express();
var fs = require("fs");
const path = require('path');
const router = express.Router();

router.get('/trains', (req, res) => {
	fs.readFile( __dirname + "/" + "train_name.json", 'utf8', function (err, data) {
      res.end( data );
	});
}) 


router.get('/trains/:train_id', function (req, res) {
   
   fs.readFile( __dirname + "/" + "train_name.json", 'utf8', function (err, data) {
      var trains = JSON.parse( data );
      var train = trains["trains" + req.params.trains.train_id];
      res.end( JSON.stringify(train));
      res.end(req.params.trains.train_id);
   });
   
})

router.get('/packages', (req, res) => {
	fs.readFile( __dirname + "/" + "packages.json", 'utf8', function (err, data) {
      res.end( data );
	});
}) 
module.exports = router;
	
