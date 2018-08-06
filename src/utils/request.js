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

export const get = (url, params) => new Promise((resolve, reject) => {
  if (params) {
    url += '?' + queryString.stringify(params)
  }
  return fetch(url)
    .then((response) =>
      resolve(response)
    )
    .catch((err) => {
      reject(err)
    })
})

export const post = (url, params) => new Promise((resolve, reject) => {
  const options = _.extend(header, {
    body: JSON.stringify(params)
  })
  return fetch(url, options)
    .then((response) =>
      resolve(response.json())
    )
    .catch((err) => {
      reject(err)
    })
})
