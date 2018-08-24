/*
 * @Author: fei
 * @Date: 2018-08-04 18:24:54
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 16:24:10
 */
'use strict';

/**
 * third part module
 */
const KoaRouter = require('koa-router');

/**
 * custom module
 */
const userController = require('../controller/user.js');
const validateSoucheUser = require('../middleware/validate_souche_user');

const router = new KoaRouter();
router
    .prefix('/api/users')
    .get('/:id', userController.retrieveUserById)
    .post('/', validateSoucheUser, userController.createUser)
    .put('/:id', userController.updateUser)
    .put('/passwords/:id', userController.updateUserPassword)
    .delete('/:id', userController.deleteUser);

module.exports = router;
