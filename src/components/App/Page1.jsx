import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Page1 extends Component {

    state = {
        feedbackForm: [{
            feelingInput: null,
            // understandingInput: null,
            // supportInput: null,
            // commentInput: '',
        }]
    }

    handleChange = (event) => {
        this.setState({
            feelingInput: event.target.value,
        });
        console.log(this.state);
    };

    onSubmit = (event) => {
        this.props.dispatch({ type: "RECIEVE_INPUT", payload: this.state });
        this.setState({
            feelingInput: null,
        });
    };

    render() {
        return (
            <>

                <h1>Page 1</h1>

                <NavLink to='/page2'><button onClick={this.onSubmit}>Next</button></NavLink>

                <br />
                <br />

                <label htmlFor='feelingInput'>How are you feeling today fam?</label>
                <input type='number' id='feelingInput' name='feelingInput' min='1' max='5' onChange={this.handleChange}></input>

            </>
        );
    }
}

export default connect()(Page1);