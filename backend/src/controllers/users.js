const User = require("../models/user");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch {
        res.status(500).send("Internal server error");
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        res.status(400).send("User with this email does not exists");
        return;
    }
    if (user.password !== password) {
        res.status(400).send("Incorrect password");
        return;
    }
    user.password = undefined;
    res.status(200).send(user);
};

const createUser = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
        res.status(400).send("User with this email already exists");
        return;
    }

    try {
        const user = await User.create({ ...req.body });
        user.password = undefined;
        res.status(201).send(user);
    } catch {
        res.status(500).send("Internal server error");
    }
};

const updateUser = async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
        res.status(400).send("User with this id does not exists");
    } else {
        user.password = undefined;
        res.status(200).send(user);
    }
};

const uploadPhoto = async (req, res) => {
    const id = req.params.id;
    const update = { photoLink: req.file.path };
    const user = await User.findByIdAndUpdate(id, update, { new: true });
    if (!user) {
        res.status(400).send("User with this id does not exists");
    } else {
        user.password = undefined;
        res.status(200).send(user);
    }
};

module.exports = {
    getAllUsers,
    createUser,
    loginUser,
    updateUser,
    uploadPhoto,
};
