import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

export const removeCurrentUser = () => ({
  type: UserActionTypes.REMOVE_CURRENT_USER,
  payload: null
})