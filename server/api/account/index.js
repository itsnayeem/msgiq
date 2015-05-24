'use strict';

var express = require('express');
var controller = require('./account.controller');

var router = express.Router();

router.post('/', controller.create);
router.get('/', controller.index); // TODO: Restrict to root administrator
router.get('/:id', controller.show); // TODO: Check authorization
router.put('/:id', controller.update); // TODO: Check authorization
router.delete('/:id', controller.destroy); // TODO: Check authorization

module.exports = router;