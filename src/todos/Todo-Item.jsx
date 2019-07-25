import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';

const TodoItem = ({ onClick, text }) => (
    <ListGroupItem
      onClick={onClick}>
          {text}
      </ListGroupItem>

)

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,  
    text: PropTypes.string.isRequired
  };
  
  export default TodoItem;