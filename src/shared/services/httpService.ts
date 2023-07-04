import axios, { type AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BESTBUY_API_URL
})

instance.interceptors.request.use(
  (config) => {
    config.params = { ...config.params, format: 'json' }

    if (import.meta.env.VITE_BESTBUY_API_KEY) {
      config.params = { ...config.params, apiKey: import.meta.env.VITE_BESTBUY_API_KEY }
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default instance
