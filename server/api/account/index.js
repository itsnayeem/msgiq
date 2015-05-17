'use strict';

var express = require('express');
var controller = require('./account.controller');

var router = express.Router();

router.post('/', controller.create);
router.get('/', controller.index); // TODO: Restrict to root administrator
router.get('/:id', controller.show); // TODO: Check authorization

module.exports = router;