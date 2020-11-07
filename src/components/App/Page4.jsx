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

    // goBack = () => {
    //     this.props.history.push('/page3');
    // }

    render() {
        return (
            <>

                <h1>Page 4</h1>

                <NavLink to='/review'><button onClick={this.onSubmit}>Next</button></NavLink>

                <br />
                <br />

                <label htmlFor='commentInput'>Got any comments? Leave your complaints here, so I can ignore them.</label>
                <input type='text' id='commentInput' name='commentInput' onChange={this.handleChange} />

                {/* <br />
                <br />

                <button onClick={this.goBack}>Back</button> */}

            </>
        );
    }
}

export default connect() (Page4);