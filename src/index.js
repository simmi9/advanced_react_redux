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
    myCount = this.props.count;
    click = () => {
        this.myCount += 1;
        this.forceUpdate(); //used only when react not handling state changed
    }
  
    render(){
        return (
            <>
            <h1> The value is: {this.props.count} </h1>
            <button onClick={this.click}>Increment</button>
            </>
        )
    }
}
ReactDOM.render( <Counter count={5}/>, 
                document.querySelector("#root"));
