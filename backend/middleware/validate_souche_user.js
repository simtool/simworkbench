/*
 * @Author: fei
 * @Date: 2018-08-24 13:50:34
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 21:58:51
 */
'use strict';

async function validateSoucheUser(ctx, next) {
    const email = ctx.request.body.email || ctx.query.email;
    if (!/[\s\S]+.souche.com/.test(email)) {
        const error = new Error('not souche user');
        error.status = 403;
        error.code = 40300001;
        throw error;
    }
    await next();
    return;
}

module.exports = validateSoucheUser;
