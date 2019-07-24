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
    </Form >)
}   