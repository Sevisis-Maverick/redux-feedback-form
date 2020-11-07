import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';

class Home extends Component {


    
    render() {
        return (
            <>

            <h1>Digital Sevisis Narcissistic Survey</h1>

            <NavLink to='/page1'><button>Start Survey</button></NavLink>

            </>
        );
    }
}

export default Home;