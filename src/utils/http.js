//axios基础封装
import axios from "axios";

const httpInstance=  axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
timeout:5000

})

//拦截器

// 添加请求拦截器
httpInstance.interceptors.request.use( (config)=> {
  // 在发送请求之前做些什么
  return config
},
e=> Promise.reject(e))


// 添加响应拦截器
httpInstance.interceptors.response.use(res=>res.data,e => {

  return Promise.reject(e);
})

export default httpInstance
