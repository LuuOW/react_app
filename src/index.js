import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
    return (
        <div>
            <Person />
            <Messege />
        </div>
    );
}

const Person = () => <h2>Lucas Kempe</h2>;
const Messege = () => {
    return(
        <p>Hello there</p>
    );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));