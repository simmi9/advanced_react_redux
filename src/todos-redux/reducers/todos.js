let nextTodoId = 4;

export default function todos(state = [], action) {
  switch (action.type) {
  
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

