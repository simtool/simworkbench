/*
 * @Author: fei
 * @Date: 2018-08-06 13:43:22
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 22:02:24
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
const User = require('../model/user.js');

module.exports = {
    createSession(ctx) {
        console.log(ctx.customError);
        throw new ctx.customError.BadRequest('lack email or password');
    }
};
