import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';

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
        console.log(this.props.store.inputReducer[0])
        console.log(this.props.store.inputReducer[1])
        console.log(this.props.store.inputReducer[2])
        console.log(this.props.store.inputReducer[3])
    }

    onSubmit = (event) => {
        //Axios request sending data to server
        Axios.post('/feedback', {
            feelingInput: this.props.store.inputReducer[0],
            understandingInput: this.props.store.inputReducer[1],
            supportInput: this.props.store.inputReducer[2],
            commentInput: this.props.store.inputReducer[3],
        }).then(() => console.log('it works')
        ).catch((err) => console.log('fuck'))
    };

    // goBack = () => {
    //     this.props.history.push('/page4');
    //     this.props.dispatch({ type: "RESET_COMMENT" });
    // }

    render() {
        return (
            <>

                <h1>Review</h1>

                <p>Congratulations, your review is complete. Now hit "submit" so we can be done.</p>

                <NavLink to='/complete'><button onClick={this.onSubmit}>Submit</button></NavLink>

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