const { admin, db } = require("../utility/admin");

const firebaseConfig = require("../utility/firebaseConfig");

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

exports.signup = async (req, res) => {
  try {
    const newUser = {
      handle: req.body.handle,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };

    let token, userId;

    const doc = await db.doc(`/users/${newUser.handle}`).get();

    const data = doc.exists
      ? res.status(400).json({ handle: "This username is unavailable" })
      : await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);

    userId = data.user.uid;

    const idToken = await data.user.getIdToken();

    token = idToken;

    const userCredentials = {
      handle: newUser.handle,
      email: newUser.email,
      createdAt: new Date().toISOString(),
      userId,
    };

    const done = await db.doc(`/users/${newUser.handle}`).set(userCredentials);

    if (done) {
      return res.status(201).json({ token });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.code });
  }
};

exports.login = async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    const data = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);

    const token = await data.user.getIdToken();

    return res.status(200).json({ token });
  } catch (err) {
    console.err(err);
    return res.status(403).json({ general: "Wrong credentials, please try again" });
  }
};

exports.getAuthenticatedUser = async (req, res) => {
  try {
    let userData = {};
    const doc = await db.doc(`/users/${req.user.handle}`).get();

    userData.credentials = doc.data();

    return res.json(userData);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.code });
  }
};
