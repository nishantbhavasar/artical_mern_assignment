import { LOGIN_API, REGISTER_API } from "../ActionTypes/atuhActionType"

export const triggerLogin = (payload:any) => {
    return {
        type:LOGIN_API,
        payload:payload,
    }
}
export const triggerRegister = (payload:any) => {
    return {
        type:REGISTER_API,
        payload:payload,
    }
}