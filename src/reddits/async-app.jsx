import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    selectSubreddit} from './redux/actions';

class AsyncApp extends Component {

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props; //request the selected subreddits and fetch response and render it
      }
    
      componentDidUpdate(prevProps) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
          const { dispatch, selectedSubreddit } = this.props;
        }
      }
    
      render() {
          return (
              <div>
                  <h2> inside selected reddits</h2>
                 <h3> Initial selection: {this.props.selectedSubreddit}</h3>
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