import React, { Component } from 'react';
import { Provider } from 'react-redux';  
import { createStore } from 'redux';
import rootReducer from './reducers/index';
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

     render = () => <Provider store={this.store}>
                        <div >
                            <h1>Todos (using Redux)</h1>
                        </div>
                    </Provider>         
    }
            
