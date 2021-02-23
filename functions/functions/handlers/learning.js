const { admin, db } = require('../utility/admin');

exports.addLearningCard = async (req, res) => {
  try {
    const newLearningCard = {
      user: req.user.handle,
      title: req.body.title,
      body: req.body.body,
      subject: req.body.subject,
    };

    const doc = await db.collection('learning').add(newLearningCard);

    newLearningCard.learningCardId = doc.id;
    res.json(newLearningCard);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

exports.getLearningCardsByUser = async (req, res) => {
  try {
    const data = await db
      .collection('learning')
      .where('user', '==', req.user.handle)
      .get();
    let cards = [];
    data.forEach((doc) => {
      cards.push({
        id: doc.id,
        title: doc.data().title,
        body: doc.data().body,
        subject: doc.data().subject,
      });
    });
    return res.json(cards);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

exports.updateLearningCard = async (req, res) => {
  try {
    const updatedLearningCard = {
      user: req.user.handle,
      title: req.body.title,
      body: req.body.body,
      subject: req.body.subject,
    };

    const doc = await db
      .collection('learning')
      .doc(req.body.id)
      .update(updatedLearningCard);

    res.json(updatedLearningCard);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

exports.addPendingCard = async (req, res) => {
  try {
    const newPendingCard = {
      user: req.user.handle,
      title: req.body.title,
      body: req.body.body,
      isCompleted: req.body.isCompleted,
    };

    const doc = await db.collection('pending').add(newPendingCard);

    newPendingCard.pendingCardId = doc.id;
    res.json(newPendingCard);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

exports.getPendingCardsByUser = async (req, res) => {
  try {
    const data = await db
      .collection('pending')
      .where('user', '==', req.user.handle)
      .get();
    let pendings = [];
    data.forEach((doc) => {
      pendings.push({
        id: doc.id,
        title: doc.data().title,
        body: doc.data().body,
        isCompleted: doc.data().isCompleted,
      });
    });
    return res.json(pendings);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

exports.updatePendingCard = async (req, res) => {
  try {
    const updatedPendingCard = {
      user: req.user.handle,
      title: req.body.title,
      body: req.body.body,
      isCompleted: req.body.isCompleted,
    };

    const doc = await db
      .collection('pending')
      .doc(req.body.id)
      .update(updatedPendingCard);

    res.json(updatedPendingCard);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

exports.addSubject = async (req, res) => {
  try {
    const newSubject = {
      user: req.user.handle,
      name: req.body.subject,
    };

    const doc = await db.collection('subjects').add(newSubject);

    newSubject.subjectId = doc.id;
    res.json(newSubject);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

exports.getSubjectsByUser = async (req, res) => {
  try {
    const data = await db
      .collection('subjects')
      .where('user', '==', req.user.handle)
      .get();
    let subjects = [];
    data.forEach((doc) => {
      subjects.push({
        cardId: doc.id,
        name: doc.data().name,
      });
    });
    return res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};
