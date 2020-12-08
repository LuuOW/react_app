import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';
import Home from './Home';

class Navbar extends Component {
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
                </ul>
            </nav>
        );
    }
}

export default Navbar;