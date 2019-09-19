var express = require('express');
var app = express();
var fs = require("fs");
const path = require('path');
const router = express.Router();

router.get('/trains', (req, res) => {
      fs.readFile(__dirname + "/" + "train_name.json", 'utf8', function (err, data) {
            res.end(data);
      });
})


router.get('/trains/:train_id', function (req, res) {
      fs.readFile(__dirname + "/" + "train_name.json", 'utf8', function (err, data) {
            var train_id = req.params.train_id;
            var train = JSON.parse(data).trains.filter(tr => {
                  return tr["train_id"].toString() === train_id.toString();
            })
            if (train) {
                  res.send(train);
            } else {
                  res.status(404).send("Train Not Found")
            }
            // var trains = JSON.parse( data );
            // var train = trains["trains" + req.params.trains.train_id];
            // res.end( JSON.stringify(train));
            // res.end(req.params.trains.train_id);
      });

})

router.get('/packages', (req, res) => {
      fs.readFile(__dirname + "/" + "packages.json", 'utf8', function (err, data) {
            res.end(data);
      });
})

router.get('/packages/:package_id', function (req, res) {
      fs.readFile(__dirname + "/" + "packages.json", 'utf8', function (err, data) {
            var package_id = req.params.package_id;
            var pack = JSON.parse(data).packages.filter(tr => {
                  return tr["package_id"].toString() === package_id.toString();
            })
            if (pack) {
                  res.send(pack);
            } else {
                  res.status(404).send("package Not Found")
            }
      });
})

router.get('/stops', (req, res) => {
      fs.readFile(__dirname + "/" + "stops.json", 'utf8', function (err, data) {
            res.end(data);
      });
})
router.get('/stops/:stops_id', function (req, res) {
      fs.readFile(__dirname + "/" + "stops.json", 'utf8', function (err, data) {
            var stops_id = req.params.stops_id;
            var stp = JSON.parse(data).stops.filter(tr => {
                  return tr["stops_id"].toString() === stops_id.toString();
            })
            if (stp) {
                  res.send(stp);
            } else {
                  res.status(404).send("stop Not Found")
            }
      });
})

module.exports = router;

