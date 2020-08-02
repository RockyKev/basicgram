// const express = require('express');
import express from 'express';
const router = express.Router();
const Not = require('you-are-not');
const not = Not.create();


router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource')
})

router.put('/add', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  not('string', req.body.name, 'User Name', 'Please check your entry') // will error if name is not what you expected

  res.send('completed task and respond with results')
})

module.exports = router

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
