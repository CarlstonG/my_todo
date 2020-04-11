import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyke}>
            <h1>My Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> |  <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyke = {
    background:  "#333",
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    border: '1px solid white'
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}



export default Header;

