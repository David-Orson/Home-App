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
  getPendingCardsByUser,
  addPendingCard,
  addSubject,
  getSubjectsByUser,
  updateLearningCard,
  updatePendingCard,
} = require('./handlers/learning');

// User Routes
app.post('/signup', signup);
app.post('/login', login);
app.get('/user', fbAuth, getAuthenticatedUser);

// Step Routes
app.post('/steps', fbAuth, addSteps);

// Learning Routes
app.get('/learning', fbAuth, getLearningCardsByUser);
app.post('/learning', fbAuth, addLearningCard);
app.get('/pending', fbAuth, getPendingCardsByUser);
app.post('/pending', fbAuth, addPendingCard);
app.post('/subject', fbAuth, addSubject);
app.get('/subjects', fbAuth, getSubjectsByUser);
app.put('/learning', fbAuth, updateLearningCard);
app.put('/pending', fbAuth, updatePendingCard);

exports.api = functions.region('europe-west1').https.onRequest(app);
