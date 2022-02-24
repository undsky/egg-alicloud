/*
 * @Author: 姜彦汐
 * @Date: 2021-01-04 08:16:49
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-08-20 16:03:28
 * @Description: 
 * @Site: https://www.undsky.com
 */
const Core = require('@alicloud/pop-core')

module.exports = function (config) {
    const _client = new Core(config);

    let _params = {}
    if (config.RegionId)
        _params.RegionId = config.RegionId

    const _requestOption = {
        method: 'POST'
    };

    return function (action, params, requestOption) {
        return _client.request(action, Object.assign(_params, params), Object.assign(_requestOption, requestOption))
    }
}