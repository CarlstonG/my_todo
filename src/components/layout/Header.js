import React from 'react';

function Header() {
    return (
        <header style={headerStyke}>
            <h1>My Todo List</h1>
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

export default Header;

