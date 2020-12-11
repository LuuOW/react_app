import React, { Component } from 'react';
import './signup.css';

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <form className="Form">
                    <h1>Registrate</h1>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required></input>
                </form>
            </div>
        );
    }
}

export default SignUp;