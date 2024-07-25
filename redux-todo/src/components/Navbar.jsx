import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' style={{ marginRight: "15px" }}>Login Page</NavLink>
            <NavLink to="/todo">TODO APP</NavLink>
        </nav>
    )
}

export default Navbar