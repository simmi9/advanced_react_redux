import { takeLatest, put, call} from 'redux-saga/effects';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';  
export const REQUEST_POSTS = 'REQUEST_POSTS'; 
export const RECEIVE_POSTS = 'RECEIVE_POSTS';  
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
};  

export function invalidateSubreddit(subreddit) {
    return {
      type: INVALIDATE_SUBREDDIT,
      subreddit
    };
  };  

export function requestPosts(subreddit) {
    return {
      type: REQUEST_POSTS,
      subreddit
    };
  };
  
  export function receivePosts(subreddit, json) {
    return {
      type: RECEIVE_POSTS,
      subreddit,
      posts: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    };
  };


function fetchPosts(subreddit) {  

    return async (dispatch) => {
     dispatch(requestPosts(subreddit));
      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        dispatch(receivePosts(subreddit, json));
      }
      catch (e)
      {
        //dispatch({ type: 'error', name: 'error', value: e.message });
     }
    };
  };
 
  function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
      return true;
    } else if (posts.isFetching) {
      return false;
    } else {
      return posts.didInvalidate;  
   }
 }
 
  export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
      if (shouldFetchPosts(getState(), subreddit)) {
       return  dispatch(fetchPosts(subreddit));
      }
    };
  };
    