/*
 * @Author: fei
 * @Date: 2018-08-06 13:43:22
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-07 10:12:41
 */
'use strict';

/**
 * third part module
 */
const debug = require('debug')(`simworkbench: ${__filename}`);

/**
 * custom module
 */
const Task = require('../model/task.js');

module.exports = {
    async retrieveTasks(ctx) {
        const condition = {
            projectId: ctx.query.projectId,
            columnId: ctx.query.columnId,
            executorId: ctx.query.executorId
        }
        Object.keys(condition).forEach(key => {
            if (condition[key] === undefined) {
                delete condition[key]
            }
        });

        debug(`condition:\n${JSON.stringify(condition, null, 4)}`);

        const tasks = await Task.retrieveTasks(condition);

        debug(`tasks:\n${JSON.stringify(tasks, null, 4)}`);

        return ctx.body = tasks;
    }
};
