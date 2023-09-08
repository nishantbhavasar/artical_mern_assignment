import { LOGIN_API, REGISTER_API } from "../ActionTypes/atuhActionType"

const initialState = {
    isLogin:false,
    data:{
        email:"",
        id:''
    }
}
export default function authReducer(state=initialState,action:{type:string,payload:any}){
    switch(action.type){
        case LOGIN_API :
            console.log(action.payload,action.type);
            return {
                ...state,
                isLogin:action.payload
            }
        case REGISTER_API :
            console.log(action.payload,action.type)
            return {
                ...state,
                isLogin:action.payload
            }
        default :
        return state
    }
}