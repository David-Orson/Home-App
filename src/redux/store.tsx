import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './reducers/userReducer';
import learningReducer from './reducers/learningReducer';
import uiReducer from './reducers/uiReducer';

/* interface initialState {
  authenticated: boolean;
} */

const initialState: any = {
  authenticated: false,
  learning: {
    cards: [],
    pendings: [],
    subjects: [],
    loadingLearnings: false,
    loadingPendings: false,
    loadingSubjects: false,
  },
  user: { authenticated: false },
  ui: { loading: false, errors: null },
};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  learning: learningReducer,
  ui: uiReducer,
});

const store: any = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
