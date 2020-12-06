import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

function List() {
    return (
        <section>
            <Person />
        </section>
    );
}

const Person = () => {
    return (
        <article>
            <Img />
            <Name />
        </article>
    );
}
const Img = () => (
    <img src = 'https://avatars3.githubusercontent.com/u/36010086?s=460&u=798aadbb6ca1ff415ab187b6446c127d6f30b5ac&v=4' alt = '' />);
const Name = () => {
    return (
        <h1>This is the Lucas Kempe Profile</h1>
    );
}

ReactDom.render(<List/>, document.getElementById('root'));