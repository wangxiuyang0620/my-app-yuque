import axios from 'axios'
export function  http(method,url,data=[]){
    let configData ={}
    configData.method = method
    configData.url = url
    let type = method === 'get' ? 'params' : 'data'
    configData[type] = data
    configData.headers={
        authorToken:localStorage.getItem('token')
    }
    return axios(configData).catch(error=>{
        if(error.response && error.response.status === 404){
            alert('接口问题')
            return
        }
    })
}