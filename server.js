const path = require('path');

const express = require('express')
const app = express()

app.use('/static', express.static('static'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//httpsServer.listen(443, () => console.log('Example app listening on port 443!'));
app.listen(8080, () => console.log('Example app listening on port 8080!'))