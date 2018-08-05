/*
 * @Author: fei
 * @Date: 2018-08-04 18:24:54
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-04 18:29:11
 */
'use strict';

/**
 * third part module
 */
const KoaRouter = require('koa-router');

const router = new KoaRouter();
router
    .prefix('/api/tasks')
    .get('/', async ctx => {
        return ctx.body = 'get task';
    })
    .post('/', async ctx => {
        return ctx.body = 'post task';
    })
    .put('/', async ctx => {
        return ctx.body = 'update task';
    })
    .delete('/', async ctx => {
        return ctx.body = 'delete task';
    });

module.exports = router;
