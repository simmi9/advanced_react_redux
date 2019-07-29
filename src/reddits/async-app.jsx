import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    selectSubreddit,
    fetchPostsIfNeeded,} from './redux/actions';  
import SelectPicker from './select-picker';

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
    
    
      render() {
          const {selectedSubreddit} = this.props;
          return (
              <div>
                  <h2> inside selected reddits</h2>
                 <h3> Initial selection: {this.props.selectedSubreddit}</h3>
                 <SelectPicker value={selectedSubreddit}
                               onChange={this.handleChange}
                               options={['reactjs', 'frontend', 'javascript']}
                 />
              </div>
          )
      }
}

function mapStateToProps(state) {
    const { selectedSubreddit } = state;  
    return {
      selectedSubreddit
    };
  }
  
export default connect(mapStateToProps)(AsyncApp);