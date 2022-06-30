import { ruLangData , enLangData } from "../../utils/langData";
import { CHANGE_LANG } from "./types";

const initStore = {
    selectedLang:enLangData,
    selectedLangSlag:'EN'
}

export default function LangsReducer(state = initStore , {type , payload}){
    switch(type){
        case `${CHANGE_LANG}_RU` : {
            return {
                ...state,
                selectedLang:ruLangData,
                selectedLangSlag:'RU'
            }
        }
        case `${CHANGE_LANG}_EN` : {
            return {
                ...state,
                selectedLang:enLangData,
                selectedLangSlag:'EN'
            }
        }
        default:
            return state
    }
}