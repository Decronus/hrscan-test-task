const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(cors());

const { PORT, MONGO_URL } = process.env;

mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));

app.get("/", (request, response) => {
    response.status(200);
    response.send("Hello world");
});

app.use(bodyParser.json());
app.use(usersRouter);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is listening on PORT ${PORT}`);
});
