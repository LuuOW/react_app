import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Aboutme from './Aboutme';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Aboutme" component={Aboutme} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;