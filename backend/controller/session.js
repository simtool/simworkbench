/*
 * @Author: fei
 * @Date: 2018-08-06 13:43:22
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 22:58:26
 */
'use strict';

/**
 * third part module
 */
const debug = require('debug')(`simworkbench: ${__filename}`);
const joi = require('joi');

/**
 * custom module
 */
const customError = require('../config/index.js').customError;
const md5 = require('../lib/md5.js');
const User = require('../model/user.js');

module.exports = {
    async createSession(ctx) {
        const { email, password } = ctx.request.body;
        if (!email || !password) throw new customError.BadRequest('lack email or password');

        const userPassword = await User.retrieveUserPasswordByEmail(email);
        console.log(userPassword);
        if (md5(password) !== userPassword) throw new customError.Forbidden('invalid password');

        ctx.body = {
            fdsaf: 123
        }
    }
};
