import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
    return (
        <div>
            <h3>hello world</h3>
            <ul>
                <li>
                    <a href = '#' >Hey there</a>
                </li>
            </ul>
        </div>
    );
}

// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'hello world')
//     );
// }

ReactDom.render(<Greeting/>, document.getElementById('root'));