import React from 'react';
import { Form, Button, Input } from 'reactstrap';
import { addTodo } from './actions';
import { connect } from 'react-redux';


function AddTodo ({ onAddTodo})  {
  let input= React.createRef();

   return (
    <div>  
      <Form inline
        onSubmit={e => {
          e.preventDefault();
          if (!input.current.value.trim()) {
            return;
          }
    
          onAddTodo(input.current.value);
          input.current.value = '';
        }}
      >

      <Input innerRef={input} 
               className="mr-2" />
        <Button color="primary" >
          Add Todo
        </Button>
      </Form>
    </div>
   )
}

 const mapDispatchToProps= dispatch => 
       ({onAddTodo: (text)=>{dispatch(addTodo(text))},
  });

export default connect(null,mapDispatchToProps)(AddTodo);   