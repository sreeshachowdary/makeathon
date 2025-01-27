const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080 || process.env.port;

app.use((req, res, next) => {
console.log(req)
})

app.use(cors());

app.use(express.json());

app.listen((port) => {
    console.log(`App is connected to ${port}`)
})

