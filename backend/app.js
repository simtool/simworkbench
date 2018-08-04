/*
 * @Author: fei
 * @Date: 2018-08-04 18:04:24
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-04 18:53:04
 */
'use strict';

/**
 * require: third part module
 */
const Koa = require('koa');
const koaBodyParser = require('koa-bodyparser');

/**
 * require: custom module
 */
const columnRouter = require('./route/column.js');
const projectRouter = require('./route/project.js');
const taskRouter = require('./route/task.js');
const userRouter = require('./route/user.js');

const app = new Koa();

/**
 * app: config middleware
 */
app.use(koaBodyParser());

/**
 * app: uncaught exception handler
 */
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        const errorInfo = {
            errorCode: error.code || 50000001,
            errorMessage: error.message || 'internal server error',
            errorStack: error.stack
        };
        console.error(errorInfo);
        return ctx.body = errorInfo;
    }
});

/**
 * app: config router
 */
app
    .use(columnRouter.routes())
    .use(projectRouter.routes())
    .use(taskRouter.routes())
    .use(userRouter.routes())
    
    // 404 error handler
    .use(ctx => {
        const error = new Error('not found');
        error.code = 40400001;
        const errorInfo = {
            errorCode: error.code,
            errorMessage: error.message,
            errorStack: error.stack
        };
        console.error(errorInfo);
        return ctx.body = errorInfo;
    });

/**
 * server: start http server
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server listen on: 0.0.0.0: ${PORT}`));
