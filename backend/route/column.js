/*
 * @Author: fei
 * @Date: 2018-08-04 18:24:54
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-04 18:28:45
 */
'use strict';

/**
 * third part module
 */
const KoaRouter = require('koa-router');

const router = new KoaRouter();
router
    .prefix('/api/columns')
    .get('/', async ctx => {
        return ctx.body = 'get column';
    })
    .post('/', async ctx => {
        return ctx.body = 'post column';
    })
    .put('/', async ctx => {
        return ctx.body = 'update column';
    })
    .delete('/', async ctx => {
        return ctx.body = 'delete column';
    });

module.exports = router;
