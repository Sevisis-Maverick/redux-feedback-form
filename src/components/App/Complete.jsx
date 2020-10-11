import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';

class Complete extends Component {


    
    render() {
        return (
            <>

            <h2>Thank you for submitting a review!</h2>

            <p>Your data has been submitted! Now please go away. Or submit another review I guess.</p>

            <NavLink to='/'><button>Take another survey</button></NavLink>

            </>
        );
    }
}

export default Complete;