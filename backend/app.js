/*
 * @Author: fei
 * @Date: 2018-08-04 18:04:24
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 16:16:22
 */
'use strict';

/**
 * builtin module
 */
const fs = require('fs-extra');
const path = require('path');

/**
 * require: third part module
 */
const _ = require('lodash');
const Koa = require('koa');
const koaBodyParser = require('koa-bodyparser');

/**
 * require: custom module
 */
const config = require('./config/index.js');
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
        ctx.status = 200;
        return ctx.body = {
            code: 20000001,
            message: 'success',
            data: ctx.body || {}
        };
    } catch (error) {
        ctx.status = Number(error.status) || 500;
        return ctx.body = {
            code: Number(error.code) || 50000001,
            message: error.message || 'internal server error',
            data: {}
        }
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
        error.status = 404;
        error.code = 40400001;
        ctx.status = error.status;
        return ctx.body = {
            code: error.code,
            message: error.message,
            data: {}
        };
    });

/**
 * server: write runtime config to file
 */
const runFolderPath = path.resolve(__dirname, 'run');
const isRunFolderPathExist = fs.existsSync(runFolderPath);
if (!isRunFolderPathExist) fs.mkdirSync(runFolderPath);
fs.writeFileSync(path.resolve(runFolderPath, 'config.json'), JSON.stringify(config, null, 4), {
    encoding: 'utf8'
});

/**
 * server: start http server
 */
const PORT = process.env.PORT || _.get(config, 'server.port') || 3000;
app.listen(PORT, () => console.log(`server listen on: 0.0.0.0: ${PORT}`));
