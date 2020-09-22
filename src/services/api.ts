import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.227.201.153:4444'
})

export default api
