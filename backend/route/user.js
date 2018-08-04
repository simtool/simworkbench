/*
 * @Author: fei
 * @Date: 2018-08-04 18:24:54
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-04 18:31:58
 */
'use strict';

/**
 * third part module
 */
const KoaRouter = require('koa-router');

const router = new KoaRouter();
router
    .prefix('/api/users')
    .get('/', async ctx => {
        throw new Error('manual error');
        // return ctx.body = 'get user';
    })
    .post('/', async ctx => {
        return ctx.body = 'post user';
    })
    .put('/', async ctx => {
        return ctx.body = 'update user';
    })
    .delete('/', async ctx => {
        return ctx.body = 'delete user';
    });

module.exports = router;
