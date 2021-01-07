const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();
const express = require("express");
const app = express();
/* const admin = require("firebase-admin"); */
/* const app = require("express")();
admin.initializeApp(); */



const {
  signup,
  login
} = require("./handlers/users")




/* const firebase = require("firebase");
firebase.initializeApp(config); */


/* app.get('/HelloWorld', (req, res) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});

app.post('./signup', (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  firebase.auth().createUser
}) */

app.post('/signup', signup);
app.post('/login', login);


exports.api = functions.region("europe-west1").https.onRequest(app);