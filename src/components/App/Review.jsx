import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Review extends Component {

    state = {
        feedbackForm: [{
            feelingInput: null,
            understandingInput: null,
            supportInput: null,
            commentInput: '',
        }]
    }

    onTest = () => {
        console.log(this.props.store.inputReducer)
        console.log(this.props.store.inputReducer.feelingInput)
    }

    onSubmit = () => {
        //Axios request sending data to server
    }

    // goBack = () => {
    //     this.props.history.push('/page4');
    //     this.props.dispatch({ type: "RESET_COMMENT" });
    // }

    render() {
        return (
            <>

                <h1>Review</h1>

                <p>Congratulations, your review is complete. Now hit "submit" so we can be done.</p>

                <NavLink to='/complete'><button>Submit</button></NavLink>

                <br />

                <button onClick={this.onTest}>A test button, you know, for testing purposes</button>

                {/* <br />
                <br />

                <button onClick={this.goBack}>Back</button> */}

            </>
        );
    }
}

const mapStateToProps = (store) => ({
    store,
})

export default connect(mapStateToProps)(Review);