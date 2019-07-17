import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './custom.scss';  //less or sass
import { Container } from 'reactstrap';
import Home from './home/Home';
import About from './about/About';
import Menu from './Menu';
import {BrowserRouter, Switch,Route}  from 'react-router-dom';  

export default class App extends React.Component {    
    constructor(props){
        super(props);  
        window.addEventListener("hashchange", this.change);
    }
    state = {currrentPage:'#home'};
    change = () => {
        this.setState({currentPage: document.location.hash});  
    } 
    switcher = (currrentPage) => {
        switch (currrentPage) {
            case '#home': return <Home />;
            case '#about': return <About />;
            case '#counter': return <Counter init={5} />;
            default:
                return <Home />;
        }
    }

    render() {
        return (
            <>
                <Menu />  
                <Container className="mt-5">
                   {this.switcher(this.state.currentPage)}      
                </Container>
            </>
        );
    }
}
