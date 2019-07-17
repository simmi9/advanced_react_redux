import React from 'react';
import ReactDOM from 'react-dom';
//own virtual dom
/*const element2 = {type:"h1", 
                    props:{style: {color: 'blue'},
                                   children:"hello world from here",
                                   name:" bhawna"},
                    key: null,
                    ref:null,
                    $$typeof: Symbol.for('react.element')
                    };
ReactDOM.render(element2, document.querySelector("#root"));  */
//ReactDOM.render(React.createElement("h1",{style:{color:'blue'}},"hello world"), document.querySelector("#root"));  


//creating Component

function SayHi(props) {
 return <h1 style={{color: "blue"}}> Hello {props.firstname} {props.lastname}</h1>;
}
const element = <SayHi firstname="bhawna" lastname="keswani"/>

ReactDOM.render(element, document.querySelector("#root"));