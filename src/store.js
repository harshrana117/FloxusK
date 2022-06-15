import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {reducer} from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { userReducer } from './reducers/user/user.reducer';
// import { projectReducer } from './reducers/project/project.reducer';

// const reducer = combineReducers({
//   user: userReducer,
//   project: projectReducer,
// })

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);
// const initialState = {}



const middleware = [thunk]

export const store = createStore(
  persistedReducer,
  // reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export const persistedStore = persistStore(store);


