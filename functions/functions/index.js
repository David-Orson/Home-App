const functions = require('firebase-functions');
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const { signup, login, getAuthenticatedUser } = require('./handlers/users');
const fbAuth = require('./utility/fbAuth');
const { addSteps } = require('./handlers/steps');

// User Routes
app.post('/signup', signup);
app.post('/login', login);
app.get('/user', fbAuth, getAuthenticatedUser);

// Step Routes
app.post('/steps', fbAuth, addSteps);

exports.api = functions.region('europe-west1').https.onRequest(app);
