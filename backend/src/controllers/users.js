const User = require("../models/user");

const getUsers = (request, response) => {
    return User.find()
        .then((data) => {
            response.status(200).send(data);
        })
        .catch((error) => response.status(500).send("Произошла ошибка сервера при выполнении запроса"));
};

const getUserById = (request, response) => {
    const { id } = request.params;

    return User.findById(id)
        .then((user) => {
            response.status(200).send(user);
        })
        .catch(() => response.status(404).send("User not found"));
};

const loginUser = async (request, response) => {
    const { email } = request.body;
    const { password } = request.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        response.status(500).send("User with this email does not exists");
        return;
    }
    if (user.password !== password) {
        response.status(500).send("Incorrect password");
        return;
    }
    user.password = undefined;
    response.status(200).send(user);
};

const createUser = async (request, response) => {
    const { email } = request.body;
    const user = await User.findOne({ email: email });
    if (user) {
        response.status(409).send("User with this email already exists");
        return;
    }

    return User.create({ ...request.body })
        .then((user) => {
            response.status(201).send(user);
        })
        .catch(() => response.status(500).send("Internal server error"));
};

const updateUser = (request, response) => {
    const { id } = request.params;

    return User.findByIdAndUpdate(id, { ...request.body })
        .then((user) => {
            if (user) {
                const updatedUser = JSON.parse(JSON.stringify(user));

                for (let key in request.body) {
                    updatedUser[key] = request.body[key];
                    console.log(key);
                }
                response.status(200).send(updatedUser);
            } else {
                response.status(404).send("Пользователь с таким ID не найден");
            }
        })
        .catch((error) => response.status(500).send("Произошла ошибка сервера при выполнении запроса"));
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser,
    updateUser,
};
