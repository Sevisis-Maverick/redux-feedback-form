import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Review from './Review'
import Complete from './Complete'
import Admin from './Admin'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><i>Fullstack Feedback Form</i></h1>
        </header>
        <br />


        {/* <Home />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Review />  */}

        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/page1' component={Page1} />
            <Route path='/page2' component={Page2} />
            <Route path='/page3' component={Page3} />
            <Route path='/page4' component={Page4} />
            <Route path='/review' component={Review} />
            <Route path='/complete' component={Complete} />
            <Route path='/admin' component={Admin} />
          </Switch>
        </Router>

      </div>
    );
  }
}



export default App;
