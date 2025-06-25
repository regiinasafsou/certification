const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup', (req, res, next) => {
  console.log('Requête POST reçue sur /signup');
  next();
}, userCtrl.signup);

router.post('/login', userCtrl.login);

module.exports = router;
