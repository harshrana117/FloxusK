import { ProfileActionTypes } from './profile.types';

const INITIAL_STATE = {
  user: {
    educationDetails: null,
    projectDetails: null,
    experienceDetails: null,
  },
};

export const UserProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfileActionTypes.SET_EDUCATION_DETAILS:
      return {
        ...state,
        user: {
          ...state.user,
          educationDetails: action.payload,
        },
      };

    case ProfileActionTypes.SET_EXPERIENCE_DETAILS:
      return {
        ...state,
        user: {
          ...state.user,
          experienceDetails: action.payload,
        },
      };

    case ProfileActionTypes.SET_PROJECT_DETAILS:
      return {
        ...state,
        user: {
          ...state.user,
          projectDetails: action.payload,
        },
      };

    case ProfileActionTypes.UPDATE_EDUCATION:
      return {
        ...state,
        user: {
          ...state.user,
          educationDetails: [action.payload, ...state.user.educationDetails],
        },
      };

    case ProfileActionTypes.UPDATE_EXPERIENCE:
      return {
        ...state,
        user: {
          ...state.user,
          experienceDetails: [action.payload, ...state.user.experienceDetails],
        },
      };

    case ProfileActionTypes.UPDATE_PROJECT:
      return {
        ...state,
        user: {
          ...state.user,
          projectDetails: [action.payload, ...state.user.projectDetails],
        },
      };

    case ProfileActionTypes.DELETE_EDUCATION:
      return {
        ...state,
        user: {
          ...state.user,
          educationDetails: state.user.educationDetails.filter(
            (doc) => doc.id != action.payload
          ),
        },
      };

    case ProfileActionTypes.DELETE_EXPERIENCE:
      return {
        ...state,
        user: {
          ...state.user,
          experienceDetails: state.user.experienceDetails.filter(
            (doc) => doc.id != action.payload
          ),
        },
      };

    case ProfileActionTypes.DELETE_PROJECT:
      return {
        ...state,
        user: {
          ...state.user,
          projectDetails: state.user.projectDetails.filter(
            (doc) => doc.id != action.payload
          ),
        },
      };

    default:
      return state;
  }
};
