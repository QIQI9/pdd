import axios from 'axios'

let instance = axios.create({
   baseURL:'',
   timeout:3000
})

instance.interceptors.request.use((config)=>config)
instance.interceptors.response.use((response)=>response)

export default instance