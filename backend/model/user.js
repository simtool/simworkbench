/*
 * @Author: fei
 * @Date: 2018-08-06 10:01:39
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 22:13:24
 */
'use strict';

const Type = require('../lib/mysql/toshihiko.js').Type;
const toshihiko = require('../lib/mysql/toshihiko.js').toshihiko;

const customError = require('../config/index.js').customError;
const generateObjectId = require('../lib/mysql/generate_object_id.js');
const md5 = require('../lib/md5.js');

const User = toshihiko.define('user', [
    { name: 'id', column: 'id', type: Type.String, primaryKey: true },
    { name: 'username', column: 'username', type: Type.String },
    { name: 'password', column: 'password', type: Type.String },
    { name: 'email', column: 'email', type: Type.String },
    { name: 'phone', column: 'phone', type: Type.String },
    { name: 'weeklyNewspaperReceiver', column: 'weekly_newspaper_receiver', type: Type.String },
    { name: 'createTime', column: 'create_time', type: Type.Timestamp },
    { name: 'updateTime', column: 'update_time', type: Type.Timestamp },
    { name: 'deleted', column: 'deleted', type: Type.Boolean }
]);

User.retrieveUserById = async function (id) {
    let user = await this
        .where({
            id: id,
            deleted: false
        })
        .field('id, username, email, phone, weeklyNewspaperReceiver, createTime, updateTime')
        .findOne(id);
    if (!user) throw new customError.NotFound('user not found');
    user = user.toJSON();
    return user;
}

User.retrieveUserPasswordByUsername = async function (username) {
    let user = await this
        .where({
            username: username
        })
        .findOne();
    if (!user) throw new customError.NotFound('user not found');
    user = user.toJSON();
    return user.password;
}

User.createUser = async function (userInfo) {
    userInfo.id = generateObjectId();
    userInfo.password = md5(userInfo.password);
    const user = this.build(userInfo);
    const result = (await user.insert()).toJSON();
    return {
        id: result.id,
        username: result.username,
        email: result.email,
        phone: result.phone,
        weeklyNewspaperReceiver: result.weeklyNewspaperReceiver,
        createTime: result.createTime,
        updateTime: result.updateTime
    };
}

User.updateUser = async function (id, userInfo) {
    let user = await this
        .where({
            id: id,
            deleted: false,
        })
        .findOne();


    if (!user) throw new customError.NotFound('user not found');

    Object.keys(userInfo).forEach(key => user[key] = userInfo[key]);
    const result = (await user.update()).toJSON();

    return {
        id: result.id,
        username: result.username,
        email: result.email,
        phone: result.phone,
        weeklyNewspaperReceiver: result.weeklyNewspaperReceiver,
        createTime: result.createTime,
        updateTime: result.updateTime
    };
}

User.updateUserPassword = async function (id, userInfo) {
    userInfo.password = md5(userInfo.password);
    let user = await this
        .where({
            id: id,
            deleted: false,
        })
        .findOne();

    if (!user) throw new customError.NotFound('user not found');

    Object.keys(userInfo).forEach(key => user[key] = userInfo[key]);
    const result = (await user.update()).toJSON();

    return {
        id: result.id,
        username: result.username,
        email: result.email,
        phone: result.phone,
        weeklyNewspaperReceiver: result.weeklyNewspaperReceiver,
        createTime: result.createTime,
        updateTime: result.updateTime
    };
}

User.deleteUser = async function (id) {
    let user = await this
    .where({
        id: id,
        deleted: false,
    })
    .findOne();

    if (!user) throw new customError.NotFound('user not found');

    user.deleted = true;
    const result = (await user.update()).toJSON();
    return {
        id: result.id,
        username: result.username,
        email: result.email,
        phone: result.phone ,
        weeklyNewspaperReceiver: result.weeklyNewspaperReceiver,
        createTime: result.createTime,
        updateTime: result.updateTime
    };
}

module.exports = User;
