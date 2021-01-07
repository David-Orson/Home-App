const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();
const express = require("express");
const app = express();
/* const admin = require("firebase-admin"); */
/* const app = require("express")();
admin.initializeApp(); */

const config = {
    apiKey: "AIzaSyColEm22By8n9S0bD0CgfWO23m7GajhTwI",
    authDomain: "orson-home-app-3e05b.firebaseapp.com",
    projectId: "orson-home-app-3e05b",
    storageBucket: "orson-home-app-3e05b.appspot.com",
    messagingSenderId: "544851561283",
    appId: "1:544851561283:web:97cd45238c28a9ef063df6",
    measurementId: "G-QBHJHR6YHZ"
};


const firebase = require("firebase");
firebase.initializeApp(config);


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

app.post('/signup', (req, res) => {
  const newUser = {
    handle: req.body.handle,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  }

  firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then((data) => {
    return res.status(201).json({ user: `user ${data.user.uid} signed up successfully`})
  })
  .catch(err => {
    return res.status(500).json ({ error: err.code })
  })
})


exports.api = functions.region("europe-west1").https.onRequest(app);