'use strict';

var express = require('express');
var controller = require('./account.controller');

var router = express.Router();

/**
 * POST /api/account/
 * @body username, email, password
 */
router.post('/', controller.create);
/**
 * GET /api/account/
 */
router.get('/', controller.index); // TODO: Restrict to root administrator
/**
 * GET /api/account/:id
 * @path id
 */
router.get('/:id', controller.show); // TODO: Check authorization (allow for admin or current user)
/**
 * PUT /api/account/:id
 * @path id
 * @body username, email, password
 */
router.put('/:id', controller.update); // TODO: Check authorization
/**
 * DELETE /api/account/:id
 * @path id
 */
router.delete('/:id', controller.destroy); // TODO: Check authorization

module.exports = router;