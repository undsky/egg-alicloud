/*
 * @Author: 姜彦汐
 * @Date: 2021-01-03 21:20:22
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2022-02-24 11:02:50
 * @Description: 
 * @Site: https://www.undsky.com
 */
const sms = require('./lib/sms')
const sts = require('./lib/sts')
const call = require('./lib/call')



module.exports = app => {
    app.addSingleton('alicloud', init);
}

function init(config, app) {
    let aliyun = {}

    if (app.oss)
        aliyun.oss = app.oss

    if (config.call)
        aliyun.call = call(config)

    if (config.sms)
        aliyun.sms = sms(config)

    if (config.sts)
        aliyun.sts = sts(config)

    return aliyun
}