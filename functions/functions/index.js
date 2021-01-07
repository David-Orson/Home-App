const functions = require('firebase-functions');

const app = require('express')();


app.get('/HelloWorld', (req, res) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});

exports.api = functions.region("europe-west1").https.onRequest(app);