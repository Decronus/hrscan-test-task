const router = require("express").Router();

const { getUserById, createUser } = require("../controllers/users");

router.post("/reg", createUser);
router.post("/login", getUserById);

module.exports = router;
