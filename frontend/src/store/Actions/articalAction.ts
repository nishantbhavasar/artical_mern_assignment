import { DELETE_ARTICAL, GET_ALL_ARTICALS, GET_ARTICAL, GET_MY_ARTICALS, UPDATE_ARTICAL } from "../ActionTypes/articalActionType"

export const triggerGetAllArtical = (payload:any) => {
    return {
        type:GET_ALL_ARTICALS,
        payload:payload,
    }
}
export const triggerGetMyArtical = (payload:any) => {
    return {
        type:GET_MY_ARTICALS,
        payload:payload,
    }
}
export const triggerGetArtical = (payload:any) => {
    return {
        type:GET_ARTICAL,
        payload:payload,
    }
}
export const triggerUpdateArtical = (payload:any) => {
    return {
        type:UPDATE_ARTICAL,
        payload:payload,
    }
}
export const triggerDeleteArtical = (payload:any) => {
    return {
        type:DELETE_ARTICAL,
        payload:payload,
    }
}