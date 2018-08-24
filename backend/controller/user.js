/*
 * @Author: fei
 * @Date: 2018-08-06 13:43:22
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 22:13:53
 */
'use strict';

/**
 * third part module
 */
const joi = require('joi');

/**
 * custom module
 */
const User = require('../model/user.js');

module.exports = {
    async retrieveUserById(ctx) {
        const id = ctx.params.id;
        const user = await User.retrieveUserById(id);
        ctx.body = user;
        return;
    },

    async createUser(ctx) {
        const userInfo = {
            username: ctx.request.body.username,
            email: ctx.request.body.email,
            password: ctx.request.body.password,
            phone: ctx.request.body.phone,
            weeklyNewspaperReceiver: ctx.request.body.weeklyNewspaperReceiver
        };

        const schema = {
            username: joi.string().optional().empty(''),
            email: joi.string().email().required(),
            password: joi.string().required(),
            phone: joi.string().length(11).optional().empty(''),
            weeklyNewspaperReceiver: joi.string().optional().empty('')
        };
        const validateResult = joi.validate(userInfo, schema);
        if (validateResult.error) {
            validateResult.error.status;
            validateResult.error.code = 40000001;
            throw validateResult.error;
        }

        const user = await User.createUser(userInfo);
        ctx.body = user;
        return;
    },

    async updateUser(ctx) {
        const userInfo = {
            username: ctx.request.body.username,
            email: ctx.request.body.email,
            phone: ctx.request.body.phone,
            weeklyNewspaperReceiver: ctx.request.body.weeklyNewspaperReceiver
        };
        Object.keys(userInfo).forEach(function (key) {
            if (!userInfo[key]) delete userInfo[key];
        });

        const schema = {
            username: joi.string().optional().empty(''),
            email: joi.string().email().required(),
            phone: joi.string().length(11).optional().empty(''),
            weeklyNewspaperReceiver: joi.string().optional().empty('')
        };
        const validateResult = joi.validate(userInfo, schema);
        if (validateResult.error) {
            validateResult.error.status;
            validateResult.error.code = 400;
            throw validateResult.error;
        }

        const user = await User.updateUser(ctx.params.id, userInfo);
        ctx.body = user;
        return;
    },

    async updateUserPassword(ctx) {
        const userInfo = {
            password: ctx.request.body.password
        };

        const schema = {
            password: joi.string().required(),
        };
        const validateResult = joi.validate(userInfo, schema);
        if (validateResult.error) {
            validateResult.error.status;
            validateResult.error.code = 400;
            throw validateResult.error;
        }

        const user = await User.updateUserPassword(ctx.params.id, userInfo);
        ctx.body = user;
        return;
    },

    async deleteUser(ctx) {
        const result = await User.deleteUser(ctx.params.id);
        ctx.body = result;
        return;
    }
};
