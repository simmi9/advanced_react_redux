import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'reactstrap';

export default function MyButton(props){
    return <Button color={props.increment <0 ? "danger" : "primary"} 
                   className="mr-3" 
                   onClick={()=>{props.onClick(props.increment)}}>  
    {props.increment < 0 ? "decrement" : "increment"} 
    {Math.abs(props.increment)}</Button>  
}