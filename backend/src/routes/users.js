const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { getAllUsers, updateUser, createUser, loginUser, uploadPhoto } = require("../controllers/users");

router.get("/users", getAllUsers);
router.patch("/users/:id/update", updateUser);
router.post("/reg", createUser);
router.post("/login", loginUser);
router.patch("/upload/:id", upload.single("file"), uploadPhoto);

module.exports = router;
