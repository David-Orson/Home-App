const { admin, db } = require('../utility/admin');

exports.addLearningCard = async (req, res) => {
  try {
    const newLearningCard = {
      user: req.user.handle,
      title: req.body.title,
      body: req.body.body,
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
        cardId: doc.id,
        title: doc.data().title,
        body: doc.data().body,
      });
    });
    return res.json(cards);
  } catch (err) {
    res.status(500).json({ error: 'something went wrong' });
  }
};
