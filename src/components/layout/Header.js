import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkstyle} to="/">Home</Link> | 
            < Link style={linkstyle}  to="/about">About</Link> 
        </header>
    )
}


const headerStyle = {
    background: '#333',
    color : '#fff',
    textAlign: 'center',
    fontFamily: 'URW Chancery L, cursive',
    padding: '10px'
}

const linkstyle = {
    color: '#fff',
    textDecoration: 'none'
}
