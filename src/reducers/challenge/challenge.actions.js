import { ChallengeActionTypes } from './challenge.types';

export const listChallenges = (challenge)  => ({
  type: ChallengeActionTypes.SET_CHALLENGES,
  payload: challenge
})

export const removeChallenges = (challenge)  => ({
  type: ChallengeActionTypes.REMOVE_CHALLENGES,
  payload: null
})