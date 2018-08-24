# 用户接口文档

> 接口入参、出参全部采用 JSON 格式，注意请求头冲 Content-Type 应该设置为 application/json

## 创建用户
`POST /api/users`

请求数据

字段 | 类型 | 是否必须 | 含义
---- | ---- | ---- | ----
email | String | √ | 邮箱，需要使用 @souche.com 的邮箱
password | String | √ | 密码明文
username | String | × | 用户名
phone | String | × | 手机号
weeklyNewspaperReceiver | String | × | 自动周报收件人，过个收件人用英文逗号分隔

响应数据

```
{
    "code": 20000001,
    "message": "success",
    "data": {
        "id": "5b7fc7e39c5df8e87182b127",
        "username": "fei",
        "email": "duanpengfei@souche.com",
        "phone": "17682342258",
        "weeklyNewspaperReceiver": "koumakan@souche.com",
        "createTime": 1535100857996,
        "updateTime": 1535100857996
    }
}
```

字段 | 类型 | 含义
---- | ---- | ----
id | String | 用户 id
username | String | 用户名
email | String | 邮箱
phone | String | 手机号
weeklyNewspaperReceiver | String | 自动周报收件人，过个收件人用英文逗号分隔
createTime | Number | 创建时间戳
updateTime | Number | 更新时间戳


## 查询用户
`GET /api/users/:id`

响应数据

```
{
    "code": 20000001,
    "message": "success",
    "data": {
        "id": "5b7fc1dd9c5df8e1421e6d0d",
        "username": "",
        "email": "duanpengfei@souche.com",
        "phone": "",
        "weeklyNewspaperReceiver": "",
        "createTime": 1535099353264,
        "updateTime": 1535099353264
    }
}
```

字段 | 类型 | 含义
---- | ---- | ----
id | String | 用户 id
username | String | 用户名
email | String | 邮箱
phone | String | 手机号
weeklyNewspaperReceiver | String | 自动周报收件人，过个收件人用英文逗号分隔
createTime | Number | 创建时间戳
updateTime | Number | 更新时间戳


## 更新用户
`PUT /api/users/:id`

请求数据

字段 | 类型 | 是否必须 | 含义
---- | ---- | ---- | ----
email | String | × | 邮箱，需要使用 @souche.com 的邮箱
username | String | × | 用户名
phone | String | × | 手机号
weeklyNewspaperReceiver | String | × | 自动周报收件人，过个收件人用英文逗号分隔

响应数据

```
{
    "code": 20000001,
    "message": "success",
    "data": {
        "id": "5b7fc7e39c5df8e87182b127",
        "username": "fei",
        "email": "duanpengfei@souche.com",
        "phone": "17682342258",
        "weeklyNewspaperReceiver": "koumakan@souche.com",
        "createTime": 1535100857996,
        "updateTime": 1535100857996
    }
}
```

字段 | 类型 | 含义
---- | ---- | ----
id | String | 用户 id
username | String | 用户名
email | String | 邮箱
phone | String | 手机号
weeklyNewspaperReceiver | String | 自动周报收件人，过个收件人用英文逗号分隔
createTime | Number | 创建时间戳
updateTime | Number | 更新时间戳

## 更新用户密码
`PUT /api/users/passwords/:id`

请求数据

字段 | 类型 | 是否必须 | 含义
---- | ---- | ---- | ----
password | String | √ | 密码明文

响应数据

```
{
    "code": 20000001,
    "message": "success",
    "data": {
        "id": "5b7fc7e39c5df8e87182b127",
        "username": "fei",
        "email": "duanpengfei@souche.com",
        "phone": "17682342258",
        "weeklyNewspaperReceiver": "koumakan@souche.com",
        "createTime": 1535100857996,
        "updateTime": 1535100857996
    }
}
```

字段 | 类型 | 含义
---- | ---- | ----
id | String | 用户 id
username | String | 用户名
email | String | 邮箱
phone | String | 手机号
weeklyNewspaperReceiver | String | 自动周报收件人，过个收件人用英文逗号分隔
createTime | Number | 创建时间戳
updateTime | Number | 更新时间戳

## 删除用户
`DELETE /api/users/:id`

响应数据

```
{
    "code": 20000001,
    "message": "success",
    "data": {
        "id": "5b7fc7e39c5df8e87182b127",
        "username": "fei",
        "email": "duanpengfei@souche.com",
        "phone": "17682342258",
        "weeklyNewspaperReceiver": "koumakan@souche.com",
        "createTime": 1535100857996,
        "updateTime": 1535100857996
    }
}
```

字段 | 类型 | 含义
---- | ---- | ----
id | String | 用户 id
username | String | 用户名
email | String | 邮箱
phone | String | 手机号
weeklyNewspaperReceiver | String | 自动周报收件人，过个收件人用英文逗号分隔
createTime | Number | 创建时间戳
updateTime | Number | 更新时间戳
