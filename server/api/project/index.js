'use strict';

var express = require('express');
var controller = require('./project.controller');

var router = express.Router();

/**
 * POST /api/project/
 * @body username, email, password
 */
router.post('/', controller.create);
/**
 * GET /api/project/
 */
router.get('/', controller.index); // TODO: Restrict to root administrator
/**
 * GET /api/project/:id
 * @path id
 */
router.get('/:id', controller.show); // TODO: Check authorization (allow for admin or current user)
/**
 * PUT /api/project/:id
 * @path id
 * @body username, email, password
 */
router.put('/:id', controller.update); // TODO: Check authorization
/**
 * DELETE /api/project/:id
 * @path id
 */
router.delete('/:id', controller.destroy); // TODO: Check authorization

module.exports = router;