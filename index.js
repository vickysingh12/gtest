const express = require('express')
var http = require('http');

const app = express()
const port = 3003


app.get('/', function(req, res) {
    res.sendFile(__dirname +'/index.html');
});
app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)
})