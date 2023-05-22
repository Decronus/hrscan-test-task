const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { createUser, loginUser, uploadPhoto } = require("../controllers/users");

router.post("/reg", createUser);
router.post("/login", loginUser);
router.post("/upload/:id", upload.single("file"), uploadPhoto);

module.exports = router;
