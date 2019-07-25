import React, { Component } from 'react';
import FilterButtons from './filter-buttons';
import VisibleTodoList from './visible-todo-list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initState = [{
  id: 1,
  text: "Buy milk",
  completed: false
}, {
  id: 2,
  text: "Walk the dog",
  completed: false
}, {
  id: 3,
  text: "Learn React",
  completed: false
}];

export default class Todos extends Component {
  
  store = createStore(rootReducer,
                     {todos: initState},        
                     devToolsEnhancer());
//Provider in redux is same as context in react
  render = () => (
    <Provider store={this.store}>
      <div >
        <h1>Todos (using Redux)</h1>
        <FilterButtons   />  
        <VisibleTodoList  />  
      </div>
    </Provider>
  );
}



