import { ProjectActionTypes } from './project.types';

export const listProjects = (project) => ({
  type: ProjectActionTypes.SET_PROJECTS,
  payload: project,
});

export const removeProjects = (project) => ({
  type: ProjectActionTypes.REMOVE_PROJECTS,
  payload: null,
});
