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
  }

  const data = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)

  let token, userId;

  userId = data.user.uid

  const idToken = await data.user.getIdToken();

  token = idToken;

  return res.status(201).json({ /* user: `user ${data.user.uid} signed up successfully` */ token })
  }
  catch (err) {
    console.error(err);
    return res.status(500).json ({ error: err.code })
  }    
}