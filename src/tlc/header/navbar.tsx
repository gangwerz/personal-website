import React from 'react';

import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/toolbox'>My ToolBox</Link>
                    </li>
                    <li>
                        <Link to='/long'>Long Page</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}


export default NavBar;