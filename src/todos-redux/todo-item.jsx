import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';  

const TodoItem = ({ onClick,  onDelete, completed, text }) => (
  <ListGroupItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer'
    }}
  >
    {text}
     
  </ListGroupItem>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;