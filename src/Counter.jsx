import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './MyButton'; 
import {Input} from 'reactstrap';    
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
    /*
    function SayHi({ firstName, children: lastName}) { 
        return (
        <h1 style={{color: "blue"}}> Hello {firstName} {lastName}</h1>
        );
    }*/
/*ReactDOM.render( <SayHi firstName="bhawna" lastName="keswani"/>, 
                document.querySelector("#root"));*/

//Creating Component Class
export default class Counter extends React.Component {
    state = { count: this.props.init };  
    click = (incr) => {
       // this.setState((prevState)=>({count: prevState.count + 1}));
       this.setState({count: this.state.count + incr});  
      //  this.forceUpdate(); //used only when react not handling state changes
    }
    
    change = (e) => {
        if(Number(e.target.value) || e.target.value === "0") {
        this.setState({count: e.target.value});
        } 
    }  
    
    render(){  
        return (  
            <>
            <h1> The value is: {this.state.count} </h1>
            <Input type="text" 
                   value={this.state.count}
                   onChange={this.change}
                   readOnly>
            </Input>    
            <br></br>
            <MyButton increment={1} onClick={this.click}/> 
            <MyButton increment={-10} onClick={this.click}/>
            <MyButton increment={100} onClick={this.click}/>
            </>
        )
    }    
}


