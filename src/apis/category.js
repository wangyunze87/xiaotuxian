import request from '@/utils/http'
export const getCategoryAPI = (id) => {
  return request({
    url:'/category',
    params:{
id
    }
  })
}


// import request from '@/utils/http.js'

// /**
//  * @description: 获取分类数据
//  * @param {*} id 分类id
//  * @return {*}
//  */
// export const getCategoryAPI = (id) => {
//   return request({
//     url:'/category',
//     params:{

//     }
//   })
// }
