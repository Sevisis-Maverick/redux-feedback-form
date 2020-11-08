import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';

class Home extends Component {


    
    render() {
        return (
            <>

            <h1>Checkin Survey</h1>

            <NavLink to='/page1'><button>Begin</button></NavLink>

            </>
        );
    }
}

export default Home;