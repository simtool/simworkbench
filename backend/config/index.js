/*
 * @Author: fei
 * @Date: 2018-08-06 13:49:02
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-06 14:15:28
 */
'use strict';

/**
 * custom module
 */
const developmentConfig = require('./development.js');
const productionConfig = require('./production.js');

const extendConfig = process.NODE_ENV === 'production' ? productionConfig : developmentConfig;
const baseConfig = {};

module.exports = Object.assign({}, baseConfig, extendConfig);
