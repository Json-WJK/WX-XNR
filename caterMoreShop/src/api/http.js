import Fly from 'flyio/dist/npm/wx'
var fly=new Fly



//配置超时时间
fly.config.timeout = 5000

// 配置请求的基地址
fly.config.baseURL = 'http://www.xiaoniren.cn'

// 配置请求头
fly.config.headers = {
    'content-type': 'application/json'
}

export default fly
