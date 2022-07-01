const { getAllUsers, createUser, updateUser, translateUser }= require("../controllers/users.controller");

const router = require("express").Router();

router.post("/normal",translateUser);


router.get("/",getAllUsers);
router.post("/",createUser);
router.put("/:id",updateUser);

module.exports = router;