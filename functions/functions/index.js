const functions = require("firebase-functions");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const { signup, login } = require("./handlers/users");

app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.region("europe-west1").https.onRequest(app);
