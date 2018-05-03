import fetch from 'dva/fetch';

let HttpUtls = {};
let baseUrl = 'http://10.60.220.224:8080/coreSystem';
let TYPE_METHOD_POST = 1;

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * post请求
 * @param url 请求地址
 * @param options 传入参数
 * @param callBack 回调
 */
HttpUtls.post = function requestPost(url, options, callBack) {
    return RequestResult(url, options, callBack, TYPE_METHOD_POST);
};
/**
 * get请求
 * @param url 请求地址
 * @param callBack 回调
 */
HttpUtls.get = function requestGet(url, callBack) {
    return RequestResult(url, callBack, TYPE_METHOD_POST);
};

/**
 * 请求结果处理
 * @param url 路径
 * @param params1 传入参数
 * @param callBack 回调结果
 * @param methodType 请求类型
 * @returns {Promise.<TResult>}
 * @constructor
 */
function RequestResult(url, params1, callBack, methodType) {
    let fetch1;
    if (methodType === TYPE_METHOD_POST) {
        let params = {
            method: 'POST',
            body: JSON.stringify(params1),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        fetch1 = fetch(baseUrl + url, params)
    } else {
        let params = {
            method: 'GET',
        };
        fetch1 = fetch(baseUrl + url, params)
    }
    return fetch1.then(checkStatus)
        .then(parseJSON)
        .then(function (response) {
            callBack(true, response);
        })
        .catch(function (error) {
            callBack(false, error);
        });
}

export default HttpUtls;
