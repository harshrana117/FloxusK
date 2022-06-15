import { ProfileActionTypes } from './profile.types';

export const setUserProfileEducation = (educationDetails) => ({
  type: ProfileActionTypes.SET_EDUCATION_DETAILS,
  payload: educationDetails,
});

export const setUserProfileExperience = (experienceDetails) => ({
  type: ProfileActionTypes.SET_EXPERIENCE_DETAILS,
  payload: experienceDetails,
});

export const setUserProfileProject = (projectDetails) => ({
  type: ProfileActionTypes.SET_PROJECT_DETAILS,
  payload: projectDetails,
});

export const updateUserEducation = (education) => ({
  type: ProfileActionTypes.UPDATE_EDUCATION,
  payload: education,
});

export const updateUserExperience = (experience) => ({
  type: ProfileActionTypes.UPDATE_EXPERIENCE,
  payload: experience,
});

export const updateUserProject = (project) => ({
  type: ProfileActionTypes.UPDATE_EDUCATION,
  payload: project,
});

export const deleteEducation = (id) => ({
  type: ProfileActionTypes.DELETE_EDUCATION,
  payload: id,
});

export const deleteExperience = (id) => ({
  type: ProfileActionTypes.DELETE_EXPERIENCE,
  payload: id,
});

export const deleteProject = (id) => ({
  type: ProfileActionTypes.DELETE_PROJECT,
  payload: id,
});
