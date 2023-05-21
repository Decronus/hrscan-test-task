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
        .catch((error) => response.status(500).send("Пользователь с таким ID не найден"));
};

const createUser = (request, response) => {
    if (!request.body.name || !request.body.surname || !request.body.username) {
        response.status(500).send("Указаны не все обязательные свойства");
        return;
    }

    return User.create({ ...request.body })
        .then((user) => {
            response.status(201).send(user);
        })
        .catch((error) => response.status(500).send("Произошла ошибка сервера при выполнении запроса"));
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

const deleteUser = (request, response) => {
    const { id } = request.params;

    return User.findByIdAndDelete(id)
        .then((user) => {
            if (user) {
                response.status(200).send(user);
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
    updateUser,
    deleteUser,
};
