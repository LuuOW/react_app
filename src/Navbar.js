import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';
import { Button } from './signup/signupbtn';
import {withRouter} from 'react-router-dom';


class Navbar extends Component {
    nextPath(SignUp) {
        this.props.history.push(SignUp);
    }
    render() {
        return(
            <nav className = "NavbarItems">
                <h1 className = "navbar-logo">
                    Kemp3
                    <i class="fas fa-skull"></i>
                </h1>
                <div className = "menu-icon">

                </div>
                <ul className = "nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key = {index}>
                                <a className = {item.cName} href = {item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                    <Button onClick = {() => this.nextPath('/signup')}>Sign Up</Button>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Navbar);