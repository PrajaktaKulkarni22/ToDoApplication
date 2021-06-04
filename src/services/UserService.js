import http from '../http-common'

const checkLogin=(login)=>{
    return http.post("/user/login" , login)
}

export default {checkLogin}