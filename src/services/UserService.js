import http from '../http-common'

const checkLogin=(login)=>{
    return http.post("/user/login" , login)
}

const registerUser=(register)=>{
    return http.post("/user/register" , register)
}

const setNewPassword=(email,register)=>{
    return http.put("/user/updatePassword" + '/' +email,register)
}
export default {checkLogin,registerUser,setNewPassword}