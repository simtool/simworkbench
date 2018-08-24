/*
 * @Author: fei
 * @Date: 2018-08-06 10:01:39
 * @Last Modified by: fei
 * @Last Modified time: 2018-08-07 10:04:11
 */
'use strict';

const Type = require('../lib/mysql/toshihiko.js').Type;
const toshihiko = require('../lib/mysql/toshihiko.js').toshihiko;

const Task = toshihiko.define('task', [
    { name: 'id', column: 'id', type: Type.String, primaryKey: true },
    { name: 'content', column: 'content', type: Type.String },
    { name: 'createTime', column: 'create_time', type: Type.Timestamp },
    { name: 'updateTime', column: 'update_time', type: Type.Timestamp },
    { name: 'expirationTime', column: 'expiration_time', type: Type.Timestamp },
    { name: 'creatorId', column: 'creator_id', type: Type.String },
    { name: 'executorId', column: 'executor_id', type: Type.String },
    { name: 'completed', column: 'completed', type: Type.Boolean },
    { name: 'parentId', column: 'parent_id', type: Type.String },
    { name: 'projectId', column: 'project_id', type: Type.String },
    { name: 'columnId', column: 'column_id', type: Type.String },
    { name: 'sequence', column: 'sequence', type: Type.Integer },
    { name: 'comment', column: 'comment', type: Type.String },
    { name: 'deleted', column: 'deleted', type: Type.Boolean }
]);

Task.retrieveTasks = async function (condition) {
    condition = Object.assign({}, condition, { deleted: false });
    const tasks = await this.where(condition).find();
    return tasks.map(task => task.toJSON());
}

module.exports = Task;
