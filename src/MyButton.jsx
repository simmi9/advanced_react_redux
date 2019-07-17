import React from 'react';
import ReactDOM from 'react-dom';

export default function MyButton(props){
    return <button style={(props.increment<0) ? {backgroundColor: "red"} : {} } onClick={()=>{props.onClick(props.increment)}}>
    {props.increment < 0 ? "decrement" : "increment"} 
    {Math.abs(props.increment)}</button>  
}