const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const { status } = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5$ for 5 credits',
      source: req.body.id,
    });
    // sdsd
    if (status === 'succeeded') {
      req.user.credits += 5;
      const user = await req.user.save();

      res.send(user);
    } else {
      res.status(400).send({ status, error: 'Oops something went wrong...' });
    }
  });
};
