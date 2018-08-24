/*
 * @Author: fei
 * @Date: 2018-08-24 14:49:49
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 14:51:02
 */
'use strict';

const crypto = require('crypto');

function md5(str, upper = false) {
    const result = crypto.createHash('md5').update(str, 'utf8').digest('hex');
    return upper ? result.toUpperCase() : result;
}

module.exports = md5;
