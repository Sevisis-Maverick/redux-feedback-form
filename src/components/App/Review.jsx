import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Review extends Component {


    
    render() {
        return (
            <>

            <h1>Review</h1>

            <p>If your information is complete, hit "submit", and you're done!</p>

            <NavLink to='/complete'><button>Submit</button></NavLink>

            </>
        );
    }
}

// CONNECT THE STORE

export default connect() (Review);