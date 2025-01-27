const express = require('express');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes')
const app = express();
const mongoose = require("mongoose");
const port = 3000;
// const uri = "mongodb+srv://sreeshachowdary51:Sirichowdary97@health.avcih.mongodb.net/health?retryWrites=true&w=majority";
const uri = "mongodb+srv://sreeshachowdary51:root@health.avcih.mongodb.net/?retryWrites=true&w=majority&appName=Health";


app.use((req, res, next) => {
console.log(req)
})

app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());
app.use('/patients', patientRoutes);


app.listen(port, () => {
    console.log(`App is connected to ${port}`)
})

