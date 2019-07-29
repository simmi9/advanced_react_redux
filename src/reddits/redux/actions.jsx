
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';  
export const REQUEST_POSTS = 'SELECT_SUBREDDIT';  

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
};  

export function requestPosts(subreddit) {  
    return {
      type: REQUEST_POSTS,
      subreddit
    };
  };
    