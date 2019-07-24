import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, FormGroup, Alert} from 'reactstrap' //Alert
import { FaRegTrashAlt } from 'react-icons/fa';
import MyTextBox from './My-Textbox';

export default function EmployeeForm (props) {
    return (
    <Form onSubmit={(e) => { e.preventDefault(); //e helps you find targer element we wont do default thing done by submit eg:post, stop propagation
                             e.stopPropagation();
                             props.onSubmit(); }
                    } >
        <Input type="hidden"
               id="empId"
               value={props.id} />
        <MyTextBox
            name="firstName"
            fullName="First Name"
            value={props.firstName}
            onChange={props.onChange}
            formErrors={props.formErrors} />  

        <MyTextBox
            name="lastName"
            fullName="Last Name"
            value={props.lastName}
            onChange={props.onChange}
            formErrors={props.formErrors} />  

        <FormGroup>
           {
            props.formErrors.global ? 
            <Alert color="danger">
              {props.formErrors.global}  
            </Alert> 
            : "" }
          <Button color="primary" disabled={Object.keys(props.formErrors).length>0}>
            Submit Employee</Button>

            { props.id !== 0 &&  
          <Button className="ml-3" color="danger"
                  onClick={props.onDelete}>
            <FaRegTrashAlt />  
          </Button>  }  
        </FormGroup>  

    </Form >)
}   

EmployeeForm.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
    formErrors: PropTypes.object.isRequired,
    onSubmit : PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };