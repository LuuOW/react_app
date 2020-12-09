import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Aboutme from './Aboutme';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import SignUp from './signup/signup';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path = "/Home" component = {Home} />
                    <Route path = "/Projects" component = {Projects} />
                    <Route path = "/Aboutme" component = {Aboutme} />
                    <Route path = '/SignUp' component = {SignUp} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;