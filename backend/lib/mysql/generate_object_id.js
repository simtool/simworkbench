/*
 * @Author: fei
 * @Date: 2018-08-06 09:23:26
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-06 09:52:41
 */
'use strict';

/**
 * builtin module
 */
const crypto = require('crypto');
const os = require('os');

function generateObjectId() {
    const currentSecond = Math.floor(Date.now() / 1000).toString(16);
    const hostId = crypto.createHash('md5').update(os.hostname()).digest('hex').slice(0, 6);
    const processId = process.pid.toString(16).slice(0, 4).padStart(4, '0');
    const counter = process.hrtime()[1].toString(16).slice(0, 6).padStart(6, '0');
    return `${currentSecond}${hostId}${processId}${counter}`;
}

module.exports = generateObjectId;
