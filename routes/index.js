const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Form route
router.get('/form', (req, res) => {
  res.render('form', { title: 'Form' });
});

// Handle form submission
router.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully');
});

// Route with parameter
router.get('/user/:name', (req, res) => {
  const { name } = req.params;
  res.render('index', { title: `User: ${name}` });
});

// Download route
router.get('/download', (req, res) => {
  const file = `${__dirname}/../public/images/sample.jpg`;
  res.download(file);
});

module.exports = router;
