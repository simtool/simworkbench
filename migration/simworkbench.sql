/**
 * simworkbench 项目初始化数据库 SQL 文件
 */

-- 创建任务 table
DROP TABLE IF EXISTS `task`;

CREATE TABLE `task` (
    `id` char(24) NOT NULL COMMENT '主键 ID',
    `content` text NOT NULL COMMENT '任务内容',
    `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '任务创建时间',
    `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '任务更新时间',
    `expirationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '任务过期时间',
    `creatorId` char(24) NOT NULL COMMENT '任务创建人 ID',
    `executorId` char(24) NOT NULL COMMENT '任务执行人 ID',
    `completed` tinyint(1) NOT NULL DEFAULT 0 COMMENT '已完成标识，0：未完成，1：已完成',
    `parentId` char(24) NOT NULL DEFAULT '000000000000000000000000' COMMENT '主任务 ID，当前任务为主任务时值为：000000000000000000000000',
    `projectId` char(24) NOT NULL COMMENT '任务所属项目 ID',
    `columnId` char(24) NOT NULL COMMENT '任务所属列 ID',
    `sequence` int(11) NOT NULL COMMENT '任务在所属列中的排序',
    `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '软删除标识，0：未删除，1：已删除',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 创建项目 table
DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
    `id` char(24) NOT NULL COMMENT '主键 ID',
    `title` varchar(128) NOT NULL COMMENT '项目名称',
    `description` text NOT NULL COMMENT '项目描述',
    `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '项目创建时间',
    `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '项目更新时间',
    `creatorId` char(24) NOT NULL COMMENT '项目创建人 ID',
    `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '软删除标识，0：未删除，1：已删除',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 创建任务列 table
DROP TABLE IF EXISTS `column`;

CREATE TABLE `column` (
    `id` char(24) NOT NULL COMMENT '主键 ID',
    `title` varchar(128) NOT NULL COMMENT '任务列名称',
    `projectId` char(24) NOT NULL COMMENT '任务所属项目 ID',
    `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '项目创建时间',
    `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '项目更新时间',
    `creatorId` char(24) NOT NULL COMMENT '项目创建人 ID',
    `sequence` int(11) NOT NULL COMMENT '任务列在所属项目中的排序',
    `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '软删除标识，0：未删除，1：已删除',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 创建用户 table
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
    `id` char(24) NOT NULL COMMENT '主键 ID',
    `username` varchar(128) NOT NULL COMMENT '用户名',
    `password` char(40) NOT NULL COMMENT '用户密码 sha1 值',
    `email` varchar(128) NOT NULL COMMENT '用户邮箱',
    `phone` varchar(20) NOT NULL COMMENT '用户手机号',
    `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '项目创建时间',
    `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '项目更新时间',
    `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '软删除标识，0：未删除，1：已删除',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 创建项目、用户关系 table
DROP TABLE IF EXISTS `project_user`;

CREATE TABLE `project_user` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增 ID',
    `projectId` char(24) NOT NULL COMMENT '项目 ID',
    `userId` char(24) NOT NULL COMMENT '用户 ID',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
