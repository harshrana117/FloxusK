import { ChallengeActionTypes} from "./challenge.types";

const INITIAL_STATE = {
    fetchedChallengesList: null,
  }

export const challengeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ChallengeActionTypes.SET_CHALLENGES:
            return {
                ...state,
                fetchedChallengesList: action.payload
            }
        case ChallengeActionTypes.REMOVE_CHALLENGES: 
            return {
                INITIAL_STATE
            }

        default:
            return state;
    } 
}