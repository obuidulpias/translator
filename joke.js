const axios = require('axios').default
const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const app = express()
//const port = 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//const jokeSiteURL = 'https://v2.jokeapi.dev/joke/'
const JokeAPI = require('sv443-joke-api');
JokeAPI.getJokes()
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })

app.post("/abcd", async (req, res) => {

    let givenString = req.body.contains;
    let givenStringRedefined = givenString.replaceAll(' ', '%20');

    await axios.get(jokeSiteURL, {
        params: {
            contains: givenString
        }
    })
    .then(function (response) {
            console.log(response);
            res.status(200).json(response);
        }).catch((error) => {
            console.log(error)
            res.status(500).json(error);
        })

});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
