/*
 * @Author: fei
 * @Date: 2018-08-06 13:49:02
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-24 22:58:26
 */
'use strict';

/**
 * custom module
 */
const developmentConfig = require('./development.js');
const productionConfig = require('./production.js');
let localConfig = {};
try {
    localConfig = require('./local.js');
} catch (error) {
    // do nothing
}

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
        },

        Forbidden: class Forbidden extends Error {
            constructor(message = 'forbidden') {
                super();
                this.message = message;
                this.status = 403;
                this.code = 40300001;
                return this;
            } 
        },
    }
};

module.exports = Object.assign({}, baseConfig, extendConfig, localConfig);
