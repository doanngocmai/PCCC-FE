import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_STATUS } from '../../pages/utils/constants'
import { SESSION_KEY } from '../../pages/common/config/session'
// import queryString from 'query-string'

Vue.use(VueAxios, axios)

const BASE_URL_DEV = 'https://localhost:44381/swagger/index.html?urls.primaryName=WebAdmin%20API'

const createAPI = () => {
  const APIInstant = Vue.axios.create({
    baseURL: BASE_URL_DEV,
    timeout: 20000,
    headers: { 'Content-Type': 'application/json' },
  })

  APIInstant.interceptors.request.use(
    async (config) => {
      config.headers.token = Cookie.get(SESSION_KEY.SESSION)
      config.headers.Authorization = Cookie.get(SESSION_KEY.SESSION)
      return config
    },
    (error) => Promise.reject(error),
  )

  APIInstant.interceptors.response.use(
    (response) => {
      const data = response.data
      if (!data.status) {
        swal({
          title: R.strings().fail_request,
          text: data?.message || R.strings().error_network,
          icon: 'error',
        }).then(function (isConfirm) {
          if (isConfirm) {
            Cookie.set(SESSION_KEY.SESSION, '')
            localStorage.setItem('token', '')
            window.location.reload()
          }
        })
      }
      return response
    },
    // handle error
    async (error) => {
      const data = error?.response?.data
      if (data && data.code === API_STATUS.UNAUTHORIZED) {
        Cookie.set(SESSION_KEY.SESSION, '')
        localStorage.setItem('token', '')
        swal({
          title: R.strings().fail_request,
          text: data?.message,
          icon: 'info',
        })
        window.location.reload()
      } else {
        swal({
          title: R.strings().fail_request,
          text: data?.message || R.strings().error_network,
          icon: 'error',
        })
      }

      return error
    },
  )
  return APIInstant
}

const axiosInstance = createAPI()

/* Support function */
// function handleResult(api) {
//   return api.then((res) => {
//     if (!res?.data?.status) {
//       return Promise.reject(res?.data)
//     }
//     return Promise.resolve(res?.data)
//   })
// }

// function parseUrl(url, query) {
//   return queryString.stringifyUrl({ url: url, query })
// }

export const ApiClient = {
  get: (url, payload) => handleResult(axiosInstance.get(parseUrl(url, payload))),
  post: (url, payload) => handleResult(axiosInstance.post(url, payload)),
  put: (url, payload) => handleResult(axiosInstance.put(url, payload)),
  patch: (url, payload) => handleResult(axiosInstance.patch(url, payload)),
  delete: (url, payload) => handleResult(axiosInstance.delete(url, {}, { data: payload })),
}

export default axiosInstance
