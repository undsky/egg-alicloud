/*
 * @Author: 姜彦汐
 * @Date: 2021-01-03 21:20:10
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-22 21:22:05
 * @Description: 
 * @Site: https://www.undsky.com
 */
const core = require('./core')

module.exports = function (config) {
    const SMS = core(Object.assign({
        accessKeyId: config.accessKeyId,
        accessKeySecret: config.accessKeySecret,
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    }, config.sms))

    async function send(PhoneNumbers, TemplateParam, TemplateCode, SignName) {
        let params = {
            "PhoneNumbers": [].concat(PhoneNumbers).join(),
            "TemplateCode": TemplateCode || config.sms.TemplateCode,
            "SignName": SignName || config.sms.SignName
        }
        if (TemplateParam) {
            const _TemplateParam = 'object' != TemplateParam ? {
                code: TemplateParam
            } : TemplateParam
            params["TemplateParam"] = JSON.stringify(_TemplateParam)
        }
        return await SMS('SendSms', params)
    }

    return {
        SMS,
        send
    }
}