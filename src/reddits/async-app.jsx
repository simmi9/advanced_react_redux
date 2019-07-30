import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit} from './redux/actions';  
import SelectPicker from './select-picker';
import Posts from './posts';  
import {Button} from 'reactstrap';

class AsyncApp extends Component {

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props; //request the selected subreddits and fetch response and render it
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
      }
    
      componentDidUpdate(prevProps) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
          const { dispatch, selectedSubreddit } = this.props;
          dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
      }

      handleChange= (nextSubreddit) => {
        this.props.dispatch(selectSubreddit(nextSubreddit));
       this.props.dispatch(fetchPostsIfNeeded(nextSubreddit));
      }


      handleRefreshClick=(e) => {
        e.preventDefault();  
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
      }
      render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        return (
          <div>
            <SelectPicker
              value={selectedSubreddit}
              onChange={this.handleChange}
              options={['reactjs', 'frontend', 'javascript']}
            />

            <p>
                 {lastUpdated &&
                    <span>
                     Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                    {' '}
                    </span>}
                {!isFetching &&
                 <Button onClick={this.handleRefreshClick}>
                     Refresh  
                 </Button>}
            </p>  

            {isFetching && posts.length === 0 && <h2>Loading...</h2>}
            {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
            {posts.length > 0 &&
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <Posts posts={posts} />
              </div>}
          </div>
        )
      }
    }  
    
    function mapStateToProps(state) {
      const { selectedSubreddit, postsBySubreddit } = state;
      const {
        isFetching,
        lastUpdated,
        items: posts
      } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
      };
      return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated,
        postsBySubreddit
      };
    }

  
export default connect(mapStateToProps)(AsyncApp);