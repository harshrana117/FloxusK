import { DashboardActionTypes } from "./dashboard.types";

const INITIAL_STATE = {
  challenge: {
    inProgress: null,
    completed: null,
    allId: null,
    total: 0,
  },

  project: {
    inProgress: null,
    completed: null,
    allId: null,
    total: 0,
  },

  total: 0,
};

export const DashboardReducer = (state = INITIAL_STATE, action) => {
  // if (DashboardActionTypes.UPDATE_CHALLENGE_STATUS == action.type) {
  //   const filtered = state.challenge.inProgress.filter(
  //     (element) => element.projectData.docId[0] == action.payload
  //   );
  //   const completed = [...state.challenge.completed, filtered];
  //   return {
  //     ...state,
  //     challenge: {
  //       ...state.challenge,
  //       completed: [completed],
  //       inProgress: action.payload,
  //       allId: {
  //         ...state.challenge.allId,
  //         [action.payload]: true,
  //       },
  //     },
  //   };
  // }

  // if  (DashboardActionTypes.UPDATE_PROJECT_STATUS == action.type) {
  //   const filtered = state.project.inProgress.filter(
  //     (element) => element.projectData.docId[0] == action.payload
  //   );
  //   const completed = [...state.project.completed, filtered];
  //   return {
  //     ...state,
  //     project: {
  //       ...state.project,
  //       completed: [completed],
  //       inProgress: action.payload,
  //       allId: {
  //         ...state.project.allId,
  //         [action.payload]: true,
  //       },
  //     },
  //   };
  // }
  switch (action.type) {
    case DashboardActionTypes.SUBMIT_CHALLENGE:
      return {
        ...state,
        challenge: {
          // ...state.challenge,
          inProgress: action.payload.tempInProgress,
          completed: action.payload.tempCompleted,
          allId: action.payload.tempAllId
        }
      }

    case DashboardActionTypes.SUBMIT_PROJECT:
      return{
        ...state,
        project: {
          inProgress: action.payload.tempInProgress,
          completed: action.payload.tempCompleted,
          allId: action.payload.tempAllId
        }
      }

    case DashboardActionTypes.START_CHALLENGE:
      return {
        ...state,
        challenge: {
          ...state.challenge,
          inProgress: action.payload.tempData,
          allId: action.payload.tempId,
        },
      };

    case DashboardActionTypes.START_PROJECT:
      return {
        ...state,
        project: {
          ...state.project,
          inProgress: action.payload.tempData,
          allId: action.payload.tempId,
        },
      };

    case DashboardActionTypes.DELETE_CHALLENGE:
      return {
        ...state,
        challenge: {
          ...state.challenge,
          inProgress: action.payload.tempData,
          allId: action.payload.tempId
        },
      };

    case DashboardActionTypes.DELETE_PROJECT:
      return {
        ...state,
        project: {
          ...state.project,
          inProgress: action.payload.tempData,
          allId: action.payload.tempId
        },
      };

    case DashboardActionTypes.SET_COMPLETED_DASHBOARD_CHALLENGES:
      return {
        ...state,
        challenge: {
          ...state.challenge,
          completed: action.payload.challengeData,
          allId: action.payload.docIdC
        },
      };

    case DashboardActionTypes.SET_INPROGRESS_DASHBOARD_CHALLENGES:
      return {
        ...state,
        challenge: {
          ...state.challenge,
          inProgress: action.payload.challengeData,
          allId: action.payload.docIdC
        },
      };

    // case DashboardActionTypes.SET_DASHBOARD_ALL_CHALLENGE_ID:
    //   return {
    //     ...state,
    //     challenge: {
    //       ...state.challenge,
    //       allId: {...state.challenge.allId, ...action.payload},
    //     },
    //   };

    case DashboardActionTypes.SET_COMPLETED_DASHBOARD_PROJECTS:
      return {
        ...state,
        project: {
          ...state.project,
          completed: action.payload.projectData,
          allId: action.payload.docIdP
        },
      };

    case DashboardActionTypes.SET_INPROGRESS_DASHBOARD_PROJECTS:
      return {
        ...state,
        project: {
          ...state.project,
          inProgress: action.payload.projectData,
          allId: action.payload.docIdP
        },
      };

    // case DashboardActionTypes.SET_DASHBOARD_ALL_PROJECT_ID:
    //   return {
    //     ...state,
    //     project: {
    //       ...state.project,
    //       allId: {...state.project.allId, ...action.payload},
    //     },
    //   };

    case DashboardActionTypes.REMOVE_DASHBOARD_DATA:
      return {
        INITIAL_STATE,
      };

    default:
      return state;
  }
};

//TO-DOS and IDEAS
//Case for updation of total in project, challenges and overall
