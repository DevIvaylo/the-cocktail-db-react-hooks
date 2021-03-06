import React from 'react';
import logo from '../logo-1.svg';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-center'>
                    <img src={logo} className='logo' alt="cocktail db logo"/>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
