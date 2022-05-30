const express = require('express');
const redis = require('../redis')
const { getAsync } = require('../redis')
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET statistic listing. */
router.get('/statistics', async (_, res) => {
  const count = await getAsync('counter')
  res.send({ "added_todos": count })
});


/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
