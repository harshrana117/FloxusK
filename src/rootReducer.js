import { userReducer } from './reducers/user/user.reducer';
import { projectReducer } from './reducers/project/project.reducer';
import { challengeReducer } from './reducers/challenge/challenge.reducer';
import { DashboardReducer } from './reducers/dashboard/dashboard.reducer';
import { UserProfileReducer } from './reducers/profile/profile.reducer';

import { combineReducers } from 'redux';

// const persistConfig = {
//     key: 'root',
//     storage: sessionStorage,
//     stateReconciler: autoMergeLevel1,
//     whitelist: ['project']
// }

export const reducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  challenge: challengeReducer,
  dashboard: DashboardReducer,
  profile: UserProfileReducer,
});

//   export default persistReducer(persistConfig, reducer);
