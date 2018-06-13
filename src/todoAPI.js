import axios from 'axios'

const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

// axios 문서 확인하기 config : 위의 create() 안 객체 내용
todoAPI.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})
export default todoAPI
