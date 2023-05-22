const User = require("../models/user");

const getUsers = (req, res) => {
    return User.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(() => res.status(500).send("Произошла ошибка сервера при выполнении запроса"));
};

const getUserById = (req, res) => {
    const { id } = req.params;

    return User.findById(id)
        .then((user) => {
            res.status(200).send(user);
        })
        .catch(() => res.status(404).send("User not found"));
};

const loginUser = async (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        res.status(500).send("User with this email does not exists");
        return;
    }
    if (user.password !== password) {
        res.status(500).send("Incorrect password");
        return;
    }
    user.password = undefined;
    res.status(200).send(user);
};

const createUser = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
        res.status(409).send("User with this email already exists");
        return;
    }

    return User.create({ ...req.body })
        .then((user) => {
            res.status(201).send(user);
        })
        .catch(() => res.status(500).send("Internal server error"));
};

const updateUser = (req, res) => {
    const { id } = req.params;

    return User.findByIdAndUpdate(id, { ...req.body })
        .then((user) => {
            if (user) {
                const updatedUser = JSON.parse(JSON.stringify(user));

                for (let key in req.body) {
                    updatedUser[key] = req.body[key];
                    console.log(key);
                }
                res.status(200).send(updatedUser);
            } else {
                res.status(404).send("Пользователь с таким ID не найден");
            }
        })
        .catch(() => res.status(500).send("Произошла ошибка сервера при выполнении запроса"));
};

const uploadPhoto = (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    const update = { photoLink: req.file.path };
    return User.findByIdAndUpdate(id, update)
        .then(() => res.status(200).send("File uploaded"))
        .catch(() => res.status(500).send("Internal server error"));
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser,
    updateUser,
    uploadPhoto,
};
