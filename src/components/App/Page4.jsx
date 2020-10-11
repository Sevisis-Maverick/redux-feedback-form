import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Page4 extends Component {

    state = {
        feedbackForm: [{
            // feelingInput: null,
            // understandingInput: null,
            // supportInput: null,
            commentInput: '',
        }]
    }

    handleChange = (event) => {
        this.setState({
            commentInput: event.target.value,
        });
        console.log(this.state);
    };

    onSubmit = (event) => {
        this.props.dispatch({ type: "RECIEVE_INPUT", payload: this.state });
        this.setState({
            commentInput: null,
          });
    };

    render() {
        return (
            <>

                <h1>Page 4</h1>

                <NavLink to='/review'><button onClick={this.onSubmit}>Next</button></NavLink>

                <br />
                <br />

                <label htmlFor='commentInput'>Any comments you would like to voice G?</label>
                <input type='text' id='commentInput' name='commentInput' onChange={this.handleChange} />

            </>
        );
    }
}

export default connect() (Page4);