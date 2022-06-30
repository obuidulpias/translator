const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Pias",
        email: "pias@gmail.com",
    },
    {
        id: uuidv4(),
        username: "sami",
        email: "sami@gmail.com",
    },
];
module.exports = users;