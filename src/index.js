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
    /*
    function SayHi({ firstName, children: lastName}) { 
        return (
        <h1 style={{color: "blue"}}> Hello {firstName} {lastName}</h1>
        );
    }*/
/*ReactDOM.render( <SayHi firstName="bhawna" lastName="keswani"/>, 
                document.querySelector("#root"));*/

//Creating Component Class
class Counter extends React.Component {
    state = { count: this.props.count };  
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
            <input type="text" 
                   value={this.state.count}
                   onChange={this.change}
                   readOnly>
            </input>
            <MyButton increment={1} onClick={this.click}/> 
            <MyButton increment={-10} onClick={this.click}/>
            <MyButton increment={100} onClick={this.click}/>
            </>
        )
    }  
}

function MyButton(props){
    return <button style={(props.increment<0) ? {backgroundColor: "red"} : {} } onClick={()=>{props.onClick(props.increment)}}>
    {props.increment < 0 ? "decrement" : "increment"} 
    {Math.abs(props.increment)}</button>  
}
ReactDOM.render( <Counter count={5}/>, 
                document.querySelector("#root"));
