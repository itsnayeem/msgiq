'use strict';

var express = require('express');
var controller = require('./org.controller');

var router = express.Router();

/**
 * POST /api/org/
 * @body username, email, password
 */
router.post('/', controller.create);
/**
 * GET /api/org/
 */
router.get('/', controller.index); // TODO: Restrict to root administrator
/**
 * GET /api/org/:id
 * @path id
 */
router.get('/:id', controller.show); // TODO: Check authorization (allow for admin or current user)
/**
 * PUT /api/org/:id
 * @path id
 * @body username, email, password
 */
router.put('/:id', controller.update); // TODO: Check authorization
/**
 * DELETE /api/org/:id
 * @path id
 */
router.delete('/:id', controller.destroy); // TODO: Check authorization

module.exports = router;