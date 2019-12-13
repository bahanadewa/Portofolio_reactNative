import {LOGIN_SUCCESS} from '../3.constan/type'

export const onLoginSuccess = (username)=>{
    return{
        type : LOGIN_SUCCESS ,
        payload : {
            username : username
        }
    }
}