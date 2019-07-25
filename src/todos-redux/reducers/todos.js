let nextTodoId = 4;

export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state,
            {  id:nextTodoId++, 
               text: action.text,
               completed: false,  
            }];             
    
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id); 
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
  
    default:
      return state;
  }
}

