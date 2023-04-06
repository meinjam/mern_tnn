const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'welcome to workout route' });
});

module.exports = router;
