import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  login: false,
}

export const userReducer = ( state = INITIAL_STATE, action) => {
 switch (action.type) {
   case UserActionTypes.SET_CURRENT_USER:
     return {
       ...state,
       currentUser: action.payload,
       login: true
     }
    
     case UserActionTypes.REMOVE_CURRENT_USER:
       return {
         INITIAL_STATE
       }

    default: 
    return state;
 } 
}