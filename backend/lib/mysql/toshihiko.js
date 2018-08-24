/*
 * @Author: fei
 * @Date: 2018-08-06 09:57:34
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-07 09:44:14
 */
'use strict';

/**
 * custom module
 */
const config = require('../../config/index.js');

const T = require('toshihiko');
const toshihiko = new T.Toshihiko('mysql', {
    host: config.toshihiko.host,
    port: config.toshihiko.port,
    database: config.toshihiko.database,
    username: config.toshihiko.username,
    password: config.toshihiko.password,
    charset: config.toshihiko.charset || 'utf8mb4',
    connectionLimit: config.toshihiko.connectionLimit || 10,
    showSql: !!config.toshihiko.showSql
});
T.Type.Timestamp = {
    name: "Timestamp",
    needQuotes: true,
    parse: function(origin) {
        return parseInt(origin);
    },
    restore: function(parsed) {
        return parsed.toString();
    },
    equal: function(a, b) {
        return a.toString() === b.toString();
    },
    defaultValue: Date.now()
};

module.exports = {
    Type: T.Type,
    toshihiko
};
