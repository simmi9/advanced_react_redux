import React, { Component } from 'react';
import {Input} from 'reactstrap';

export default class SelectPicker extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h1>{value}</h1>
        <Input className='mb-1' type='select' onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}  
        </Input>
      </span>
    )
  };
}