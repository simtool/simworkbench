/*
 * @Author: fei
 * @Date: 2018-08-06 09:35:13
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-06 09:56:33
 */
'use strict';

const assert = require('assert');

const generateObjectId = require('../../../lib/mysql/generate_object_id.js');

describe('test lib/mysql/generate_object_id', function () {
    it('objectId should be 11 lenght string', function () {
        const objectId = generateObjectId();
        assert.strictEqual(objectId.length, 24);
        assert.strictEqual(typeof objectId, 'string');
        assert.strictEqual(/[a-z0-9]+/.test(objectId), true);
    });
});
