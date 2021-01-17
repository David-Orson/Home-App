const { admin, db } = require("../utility/admin");

exports.addSteps = async (req, res) => {
  try {
    const newStepData = {
      user: req.user.handle,
      steps: req.body.steps,
      day: req.body.day,
    };

    const doc = await db.collection("steps").add(newStepData);

    newStepData.stepDataId = doc.id;
    res.json(newStepData);
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};
