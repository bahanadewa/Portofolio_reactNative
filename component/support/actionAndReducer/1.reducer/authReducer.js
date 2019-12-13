const INITIAL_STATE = {username:""}
import {LOGIN_SUCCESS} from '../3.constan/type'

const authReducer = (state,action)=>{
        switch (action.type){
            case LOGIN_SUCCESS :
                return {...INITIAL_STATE,
                    username : action.payload.username}
            default : 
                return INITIAL_STATE
            
        }
}

export default authReducer