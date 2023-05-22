const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { getAllUsers, createUser, loginUser, uploadPhoto } = require("../controllers/users");

router.get("/users", getAllUsers);
router.post("/reg", createUser);
router.post("/login", loginUser);
router.patch("/upload/:id", upload.single("file"), uploadPhoto);

module.exports = router;
