import React, { Component } from 'react';
import './signup.css';

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <h1>Registrate</h1>
                <form className="Form">
                    <label for="username">Nombre de usuario: </label>
                    <input type="text" id="name" name="name" required></input>

                    <label for="email">Email: </label>
                    <input type="text" id="email" name="password" required></input>

                    <label for="password">Contraseña: </label>
                    <input type="password" id="password" name="password" required></input>
                </form>
            </div>
        );
    }
}

export default SignUp;