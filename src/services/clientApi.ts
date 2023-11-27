import axios, { AxiosError } from 'axios'

// const id_development = import.meta?.env?.MODE === 'development'

const clientApi = axios.create({
  baseURL: 'https://api.github.com/',
  responseType: 'json',
  timeout: 60000
})

clientApi.interceptors.response.use(
  success => {
    // if (id_development) console.log(success.data)
    return success.data
  },

  (error: AxiosError) => {
    // if (id_development) console.log('ERROR API GitHub >>>', error?.response || error)
    return Promise.reject(error?.response || error)
  }
)

export { clientApi }
