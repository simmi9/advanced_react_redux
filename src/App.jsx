import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';    
import './custom.scss';  //less or sass
import {Container} from 'reactstrap';  

export default function App() {
    return(
        <Container>
         <Counter count={5} />  
        </Container> );
}
