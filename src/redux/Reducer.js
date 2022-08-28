import { USER_DATA, RECRUITER_DATA } from "./Type";


const initialstate ={
    userCredArray:[],
    recrCredArray : []
};

export const Reducer = (state = initialstate,action) => {
    switch(action.type){
        case USER_DATA:
            return {
                ...state,
                userCredArray:[...state.userCredArray,action.payload]
            }
            case RECRUITER_DATA:
                return {
                    ...state,
                    recrCredArray:[...state.recrCredArray,action.payload]
                }
            default :
            return state
    }
};