import { DELETE_ARTICAL, GET_ALL_ARTICALS, GET_ARTICAL, GET_MY_ARTICALS, UPDATE_ARTICAL } from "../ActionTypes/articalActionType";

const initialState = {
    articals:[],
    myArticals:[],
}
export default function articalReducer(state=initialState,action:{type:string,payload:any}){
    switch(action.type){
        case GET_ALL_ARTICALS :
            console.log(action.payload,action.type);
            return {
                ...state,
                articals:action.payload
            }
        case GET_MY_ARTICALS :
            console.log(action.payload,action.type)
            return {
                ...state,
                myArticals:action.payload
            }
        case GET_ARTICAL :
            console.log(action.payload,action.type)
            return {
                ...state,
            }
        case UPDATE_ARTICAL :
            console.log(action.payload,action.type)
            return {
                ...state,
            }
        case DELETE_ARTICAL :
            console.log(action.payload,action.type)
            return {
                ...state,
            }
        default :
        return state
    }
}