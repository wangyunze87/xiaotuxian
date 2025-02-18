import httpInstance from '@/utils/http'

//获取banner    getBannerAPI
export function getBannerAPI(){
  return httpInstance({
    url:"home/banner"
  })
}
