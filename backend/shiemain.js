const express = require('express')
const bodyParser = require('body-parser');
const chokidar = require('chokidar');

const watcher = chokidar.watch('./src');
const router = require('./src/shie')


const app = express();
app.set('port', 3000);

app.use('/apis', router);

app.use(function (error, req, res, next) {
    res.json({ status: 'ERROR', message: error.message });
});

const server = app.listen(app.get('port'), () => {
    console.log('App is running at %d', app.get('port'));
    console.log('  Press CTRL-C to stop\n');
});
module.exports = app;