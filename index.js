'use strict';
const express = require('express');
const app = express();
const port = process.argv[2] || 8080;

app.get('/', (req, res) => {

    res.json({
        ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language: req.headers['accept-language'].split(",")[0],
        software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
    });
});

app.listen(port, () => {
    console.log('Server listening on port ' + port + '!');
});
