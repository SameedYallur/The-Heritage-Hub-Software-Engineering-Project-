const bodyParser = require("body-parser");
const express = require("express");
const { authRouter } = require("./art");

const app = express();

// app.use(bodyParser);
app.use(authRouter);

app.listen(5500 , "0.0.0.0" , () => {
    console.log("connected at port 5500")
});