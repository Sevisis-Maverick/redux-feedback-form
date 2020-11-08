import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Page3 extends Component {

    state = {
        feedbackForm: [{
            // feelingInput: null,
            // understandingInput: null,
            supportInput: null,
            // commentInput: '',
        }]
    }

    handleChange = (event) => {
        this.setState({
            supportInput: event.target.value,
        });
        console.log(this.state);
    };

    onSubmit = (event) => {
        this.props.dispatch({ type: "RECIEVE_INPUT", payload: this.state });
        this.setState({
            supportInput: null,
        });
    };

    // goBack = () => {
    //     this.props.history.push('/page2');
    // }

    render() {
        return (
            <>

                <h1>Page 3</h1>

                <NavLink to='/page4'><button onClick={this.onSubmit}>Next</button></NavLink>

                <br />
                <br />

                <label htmlFor='supportInput'>How well do you feel supported?</label>
                <input type='number' id='supportInput' name='supportInput' min='1' max='5' onChange={this.handleChange}></input>

                {/* <br />
                <br />

                <button onClick={this.goBack}>Back</button> */}

            </>
        );
    }
}

export default connect()(Page3);
