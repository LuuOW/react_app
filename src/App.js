import React from 'react';
import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Aboutme from './Aboutme';
import SignUp from './signup/signup';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Aboutme" component={Aboutme} />
                    <Route path="/signup" component={SignUp} />
                </Switch>

            </div>
        </Router >
    );
}

export default App;