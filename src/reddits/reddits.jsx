import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; 
import thunkMiddleware from 'redux-thunk'; 
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import {
  SELECT_SUBREDDIT,
  REQUEST_POSTS,
  INVALIDATE_SUBREDDIT,
  RECEIVE_POSTS,
} from './redux/actions';

import AsyncApp from './async-app';  

//Reducers
function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

function posts(
    state = {
      isFetching: false,
      didInvalidate: false,
      items: []
    },
    action
  ) {
    switch (action.type) {
      case REQUEST_POSTS:  
        return {...state, 
                isFetching: true,
                didInvalidate: false
               };
      case INVALIDATE_SUBREDDIT:
        return {...state, 
                didInvalidate: true 
                }; 
      case RECEIVE_POSTS:
        return {...state, 
                 isFetching: false,
                 didInvalidate: false,
                 items: action.posts,
                 lastUpdated: action.receivedAt
                 };  
      default:
        return state;
    }
  }
  
  //handles caching
  function postsBySubreddit(state = {}, action) {
    switch (action.type) {  
      case INVALIDATE_SUBREDDIT:
      case RECEIVE_POSTS:  
      case REQUEST_POSTS:
        return { ...state, 
                 [action.subreddit]: posts(state[action.subreddit], action)
               };

      default:
        return state;
    }
  }

const rootReducer = combineReducers({  
  postsBySubreddit,
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
        thunkMiddleware,  
        loggerMiddleware
      )
    )
  );
};
  

const store = configureStore();    

const Reddits = () => {  

return(
    <Provider store={store}>  
        <AsyncApp />
    </Provider>  
  )
};

export default Reddits;