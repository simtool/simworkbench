/*
 * @Author: fei
 * @Date: 2018-08-06 13:49:02
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 22:10:47
 */
'use strict';

/**
 * custom module
 */
const developmentConfig = require('./development.js');
const productionConfig = require('./production.js');

const extendConfig = process.NODE_ENV === 'production' ? productionConfig : developmentConfig;
const baseConfig = {
    customError: {
        NotFound: class NotFound extends Error {
            constructor(message = 'not found') {
                super();
                this.message = message;
                this.status = 404;
                this.code = 40400001;
                return this;
            }
        },

        BadRequest: class BadRequest extends Error {
            constructor(message = 'bad request') {
                super();
                this.message = message;
                this.status = 400;
                this.code = 40000001;
                return this;
            }
        }
    }
};

module.exports = Object.assign({}, baseConfig, extendConfig);
