const functions = require('firebase-functions');
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const { signup, login, getAuthenticatedUser } = require('./handlers/users');
const fbAuth = require('./utility/fbAuth');
const { addSteps } = require('./handlers/steps');
const {
  addLearningCard,
  getLearningCardsByUser,
} = require('./handlers/learning');

// User Routes
app.post('/signup', signup);
app.post('/login', login);
app.get('/user', fbAuth, getAuthenticatedUser);

// Step Routes
app.post('/steps', fbAuth, addSteps);

// Learning Routes
app.get('/learning-cards', fbAuth, getLearningCardsByUser);
app.post('/learning', fbAuth, addLearningCard);

exports.api = functions.region('europe-west1').https.onRequest(app);
