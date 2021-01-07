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

exports.signup = async (req, res) => {
  try {
    const newUser = {
    handle: req.body.handle,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  }

  const data = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  
  return res.status(201).json({ user: `user ${data.user.uid} signed up successfully`})
  }
  catch (err) {
    console.error(err);
    return res.status(500).json ({ error: err.code })
  }
    
}