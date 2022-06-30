import { CHANGE_LANG } from './types'


export const ruLangActions = (data) =>{
    return {
        type:`${CHANGE_LANG}_RU`,
        payload:data
    }
}
export const enLangActions = (data) =>{
    return {
        type:`${CHANGE_LANG}_EN`,
        payload:data
    }
}


