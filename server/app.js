const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Request received!');
    next();
})
.use((req, res, next) => {
    res.status(201);
    next();
})
.use((req, res, next) => {
    res.json({message: 'Your request is successful !'});
    next();
})
.use((req, res, next) => {
    console.log('Response sent successfully!');
});

module.exports = app;
