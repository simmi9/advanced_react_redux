import React from 'react';
import Counter from '../Counter'; 
import './custom.scss';  //less or sass
import { Container } from 'reactstrap';
import Home from '../home/Home';
import About from '../about/About';
import Menu from '../Menu';
import Footer from '../Footer';
import Employees from '../employees/Employees';  
import EmployeeDetails from '../employee-details/Employee-Details';  
import Todos from '../todos-redux/todos';     
import Reddits from '../reddits/reddits';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {  

    render() {
        return (
                <BrowserRouter>
                    <Menu />
                    <Container className="mt-5">
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/about" component={About} />  
                            <Route path="/counter" render={() => <Counter init={5}/>} />  
                            <Route path="/employees" component={Employees} />   
                            <Route exact path="/employee" component={EmployeeDetails} />   
                            <Route path='/employee/:id' component={EmployeeDetails} />  
                            <Route path='/todos' component={Todos} /> 
                            <Route path="/reddits" component={Reddits} />  
                        </Switch>
                        <Footer></Footer>
                    </Container>
                </BrowserRouter>
        );
    }
}
