/*
 * @Author: fei
 * @Date: 2018-08-04 18:24:54
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-06 13:48:38
 */
'use strict';

/**
 * third part module
 */
const KoaRouter = require('koa-router');

/**
 * custom module
 */
const taskController = require('../controller/task.js');

const router = new KoaRouter();
router
    .prefix('/api/tasks')
    .get('/', taskController.retrieveTasks)
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
