import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';  
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import {
  SELECT_SUBREDDIT  
} from './redux/actions';

//Reducers
function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

const rootReducer = combineReducers({  
  selectedSubreddit
});  

//Middleware and store
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,  
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
      )
    )
  );
};
  

const store = configureStore();  

const Reddits = () => {  

return(
    <Provider store={store}>
        <h1>Reddits</h1>
    </Provider>  
  )
};

export default Reddits;