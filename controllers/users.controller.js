const axios = require('axios').default

const { request } = require("../app");
let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

const jokeSiteURL = 'https://v2.jokeapi.dev/joke/'

const translateUser = async (req, res) => {

    let givenString = req.body.givenString;

    let givenStringRedefined = givenString.replaceAll(' ', '%20');
    let responseFromURL = '';

    axios.get(jokeSiteURL, {
        params: {
            contains: givenStringRedefined
        }
    })
        .then(function (response) {
            console.log(response);
            res.status(200).json(response);
        }).catch((error) => {
            console.log(error)
            res.status(500).json(error);
        })
};

//get users
const getAllUsers = (req, res) => {
    res.status(200).json({ users });
};
//create users
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
    };
    users.push(newUser);
    res.status(200).json(users);
};
//create users
const updateUser = (req, res) => {
    const id = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id == userid).map(
        (selecteduser) => {
            selecteduser.username = username;
            selecteduser.email = email;
        });
    res.status(200).json(users);
};

module.exports = { getAllUsers, createUser, updateUser, translateUser };