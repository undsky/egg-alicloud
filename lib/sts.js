/*
 * @Author: 姜彦汐
 * @Date: 2021-08-20 16:53:33
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-08-20 17:09:25
 * @Description: https://help.aliyun.com/document_detail/28801.html
 * @Site: https://www.undsky.com
 */
const core = require('./core')

module.exports = function (config) {
    return core(Object.assign({
        accessKeyId: config.accessKeyId,
        accessKeySecret: config.accessKeySecret,
        endpoint: 'https://sts.aliyuncs.com',
        apiVersion: '2015-04-01'
    }, config.sts))
}