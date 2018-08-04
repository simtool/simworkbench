/*
 * @Author: fei
 * @Date: 2018-08-04 18:24:54
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-04 18:29:04
 */
'use strict';

/**
 * third part module
 */
const KoaRouter = require('koa-router');

const router = new KoaRouter();
router
    .prefix('/api/projects')
    .get('/', async ctx => {
        return ctx.body = 'get project';
    })
    .post('/', async ctx => {
        return ctx.body = 'post project';
    })
    .put('/', async ctx => {
        return ctx.body = 'update project';
    })
    .delete('/', async ctx => {
        return ctx.body = 'delete project';
    });

module.exports = router;
