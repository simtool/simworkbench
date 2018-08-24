/*
 * @Author: fei
 * @Date: 2018-08-04 18:24:54
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 22:21:13
 */
'use strict';

/**
 * third part module
 */
const KoaRouter = require('koa-router');

/**
 * custom module
 */
const sessionController = require('../controller/session.js');

const router = new KoaRouter();
router
    .prefix('/api/sessions')
    .get('/', sessionController.createSession)
    .post('/', sessionController.createSession)
    .put('/', async ctx => {
        return ctx.body = 'update session';
    })
    .delete('/', async ctx => {
        return ctx.body = 'delete session';
    });

module.exports = router;
