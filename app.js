const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const userRouter = require("./routes/users.routes");
const { translateUser } = require("./controllers/users.controller");

const axios = require('axios').default

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users",userRouter);
app.use("/translate",userRouter);






//home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


//route not found error
app.use((err, req, res, next)=> {
    res.status(500).json({message: "something broke"});
});

module.exports = app;

