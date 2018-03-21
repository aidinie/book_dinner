import axios from 'axios'


import {
  Message
} from 'element-ui';

var $http = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'content-Type': 'application/json'
  }
})

$http.interceptors.response.use(function(response) {
  // console.log('接口返回的结果：');
  // console.log(response);
  let data = response.data
  if (data ) {
    return data
  } else {
    Message.error(data.error ? data.error.msg : '未定义异常信息.')
    return Promise.reject(data.error);
  }
}, function(error) {
  return Promise.reject(error);
});

export default {
    get(url, params, callback) {
      return $http.get(url, params)
    },
    post(url, params, callback) {
      return $http.post(url, params)
    },
    makeApiMethod(source, target, method) {
      let getApiNames = Object.keys(source)
      getApiNames.forEach(apiName => {
        target[apiName] = (params) => {
          return this[method || 'get'](source[apiName], params)
        }
      })
    }
}