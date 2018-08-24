/*
 * @Author: fei
 * @Date: 2018-08-24 13:50:34
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 16:13:13
 */
'use strict';

module.exports = async function (ctx, next) {
    const email = ctx.request.body.email || ctx.query.email;
    if (!/[\s\S]+.souche.com/.test(email)) {
        const error = new Error('not souche user');
        error.status = 403;
        error.code = 40300001;
        throw error;
    }
    return await next();
}
