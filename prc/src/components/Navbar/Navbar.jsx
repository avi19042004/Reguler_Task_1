import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo-img">
                <img src={logo} alt="" />
            </div>


            <div className='dropdown-main'>
                <div className="dropdown">
                    <div className="dropbtn">Product<i class="arrow down"></i></div>
                    <div className="dropdown-content">
                        <Link to='' className='links'>Product 1</Link>
                        <Link to='' className='links'>Product 2</Link>
                        <Link to='' className='links'>Product 3</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="dropbtn">Resource<i class="arrow down"></i></div>
                    <div className="dropdown-content">
                        <Link to='' className='links'>Resource 1</Link>
                        <Link to='' className='links'>Resource 2</Link>
                        <Link to='' className='links'>Resource 3</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="dropbtn">Tool<i class="arrow down"></i></div>
                    <div className="dropdown-content">
                        <Link to='' className='links'>Tool 1</Link>
                        <Link to='' className='links'>Tool 2</Link>
                        <Link to='' className='links'>Tool 3</Link>
                    </div>
                </div>
            </div>


            <div className="signup-contact">
                <div className="signup">Sign Up</div>
                <div className="contact">Contact Sales</div>
            </div>
        </div>
    )
}

export default Navbar