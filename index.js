const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Application is up!'
    })
});

app.listen(8080, () => {
    console.log('Server is up and running');
});