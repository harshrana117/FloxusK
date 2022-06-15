
import { ProjectActionTypes } from './project.types';

const INITIAL_STATE = {
  fetchedProjectsList: null,
}

export const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.SET_PROJECTS:
      return {
        ...state,
        fetchedProjectsList: action.payload

      }
    
      case ProjectActionTypes.REMOVE_PROJECTS:
        return {
          INITIAL_STATE
        }
      
      default:
        return state;

      }
    }
    /*
    {case ProjectActionTypes.PROJECT_LIST_REQUEST:
      return {
        loading: true,
        projects: []
      }
    case ProjectActionTypes.PROJECT_LIST_SUCCESS:
      return {
        loading: false,
        projects: action.payload
      }
    case ProjectActionTypes.PROJECT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
    }
    */
  