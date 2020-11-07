import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';

class Admin extends Component {

//Axios request bringing data from the server, from the database, loop over the results, and display
    
    render() {
        return (
            <>

            <h1>Admin Page</h1>

            <p>All database entries go here!</p>

            </>
        );
    }
}

export default Admin;