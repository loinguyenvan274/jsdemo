const fetchUrl = require("fetch").fetchUrl;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 42100;

const account = '@loinguyenvan274';

app.get('/api/followers', (req, res) => {
    const url = `https://www.tiktok.com/${account}`;

    fetchUrl(url, function (error, meta, body) {
        if (error) {
            console.log(error);
            return;
        }

        console.log('Incoming request')

        const htmlString = body.toString();

        const reg = /<strong\stitle.*followers-count">([0-9]*)<\/strong>/;
        const result = reg.exec(htmlString);
        const count = result[1];
        console.log('Got Follower result: ', count);

        res.send(count);
    });
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

