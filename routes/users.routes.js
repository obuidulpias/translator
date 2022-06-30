const { getAllUsers }= require("../controllers/users.controller");

const router = require("express").Router();


router.get("/",getAllUsers);
module.exports = router;