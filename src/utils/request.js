import 'whatwg-fetch'
import 'es6-promise'
import * as queryString from 'query-string'
import * as _ from 'lodash'

const header = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

const _get = (url, params) => new Promise((resolve, reject) => {
  if (params) {
    url += '?' + queryString.stringify(params)
  }
  console.log('request get url', url)
  return fetch(url)
    .then((response) =>
      resolve(response.json())
    )
    .catch((err) => {
      reject(err)
    })
})

const _post = (url, params) => new Promise((resolve, reject) => {
  const options = _.extend(header, {
    body: JSON.stringify(params)
  })
  console.log('request post url', url)
  return fetch(url, options)
    .then((response) =>
      resolve(response.json())
    )
    .catch((err) => {
      reject(err)
    })
})

const baseUrlIntercept = method => {
  return async(url, params = {}) => {
    console.log(1)
    return await method(url, params)
  }
}

const statusIntercept = method => {
  return async(...args) => {
    console.log(2)
    const response = await method(...args)
    if (response.data.code !== 200) {
      const message = response.message || 'Unknown Error'
      alert(message)
      throw new Error(message)
    }
    if (!response.data) throw new Error('Empty response data')
    return response.data
  }
}

const requestErrorIntercept = method => {
  return async(...args) => {
    console.log(...args)
    try {
      return await method(...args)
    } catch (error) {
      console.error('at fetch error', error)
      const message = '链接请求出现异常，请检查您的网络设置。'
      alert(message)
    }
  }
}

const intercepts = [
  baseUrlIntercept,
  statusIntercept,
  requestErrorIntercept
]

const responseUse = method => [method, ...intercepts].reduce((origin, wrapper) => wrapper(origin))

export const get = responseUse(_get)
export const post = responseUse(_post)
