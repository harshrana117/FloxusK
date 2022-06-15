import { DashboardActionTypes } from './dashboard.types';

export const startProject = (item) => ({
  type: DashboardActionTypes.START_PROJECT,
  payload: item
})

export const startChallenge = (item) => ({
  type: DashboardActionTypes.START_CHALLENGE,
  payload: item
})

export const submitProject = (item) => ({
  type: DashboardActionTypes.SUBMIT_PROJECT,
  payload: item
})

export const submitChallenge = (item) => ({
  type: DashboardActionTypes.SUBMIT_CHALLENGE,
  payload: item
})

export const deleteProject = (deletedArray_and_Id) => ({
  type: DashboardActionTypes.DELETE_PROJECT,
  payload: deletedArray_and_Id
})

export const deleteChallenge = (deletedArray_and_Id) => ({
  type: DashboardActionTypes.DELETE_CHALLENGE,
  payload: deletedArray_and_Id
})

export const listDashboardChallengesCompleted = (completedChallenges) => ({
  type: DashboardActionTypes.SET_COMPLETED_DASHBOARD_CHALLENGES,
  payload: completedChallenges,
});

export const listDashboardChallengesInProgress = (inProgressChallenges) => ({
  type: DashboardActionTypes.SET_INPROGRESS_DASHBOARD_CHALLENGES,
  payload: inProgressChallenges,
});

export const listDashboardProjectsCompleted = (completedProjects) => ({
  type: DashboardActionTypes.SET_COMPLETED_DASHBOARD_PROJECTS,
  payload: completedProjects,
});

export const listDashboardProjectsInProgress = (inProgressProjects) => ({
  type: DashboardActionTypes.SET_INPROGRESS_DASHBOARD_PROJECTS,
  payload: inProgressProjects,
});


export const removeDashboardData = () => ({
  type: DashboardActionTypes.REMOVE_DASHBOARD_DATA,
  payload: null,
});

//TO-DOS and IDEAS
//Case for updation of total in project, challenges and overall
