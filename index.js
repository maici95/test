const express = require('express');
const app = express();

app.listen(80);

app.get('/', (req, res) => {
    res.json({
        msg: 'hello world'
    });
});

app.get('/fail', (req, res) => {
    console.log('about to fail');
    const a = 3;

    res.json({
        msg: a.test.normal
    });
});
