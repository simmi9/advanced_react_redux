import React from 'react'
import { FormGroup, Input, FormFeedback } from 'reactstrap'
import PropTypes from 'prop-types'
const MyTextBox = (props) => {
    
        return(
            <FormGroup>
            <Input type="text"
                name={props.name}
                placeholder={props.fullName}
                value={props.value}
                onChange={props.onChange}
                invalid={!!props.formErrors[props.name]}
            />
            <FormFeedback >{props.formErrors[props.name]}</FormFeedback>  
        </FormGroup>
        )
}


export default MyTextBox;  