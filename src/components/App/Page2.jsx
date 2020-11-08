import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Page2 extends Component {

    state = {
        feedbackForm: [{
            // feelingInput: null,
            understandingInput: null,
            // supportInput: null,
            // commentInput: '',
        }]
    }

    handleChange = (event) => {
        this.setState({
            understandingInput: event.target.value,
        });
        console.log(this.state);
    };

    onSubmit = (event) => {
        this.props.dispatch({ type: "RECIEVE_INPUT", payload: this.state });
        this.setState({
            understandingInput: null,
        });
    };

    // goBack = () => {
    //     this.props.history.push('/page1');
    // }

    render() {
        return (
            <>

                <h1>Page 2</h1>

                <NavLink to='/page3'><button onClick={this.onSubmit}>Next</button></NavLink>
                

                <br />
                <br />

                <label htmlFor='understandingInput'>Do you understand this weeks content?</label>
                <input type='number' id='understandingInput' name='understandingInput' min='1' max='5' onChange={this.handleChange}></input>

                {/* <br />
                <br />

                <button onClick={this.goBack}>Back</button> */}

            </>
        );
    }
}

export default connect()(Page2);