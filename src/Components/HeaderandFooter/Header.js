import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import { TiHome } from "react-icons/ti";
import { FaBlogger } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { FaBars } from "react-icons/fa";
import './Header.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (


        <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
                <FaBars />
            </label>
            <label class="logo">
                <Link className='links active' to="/">
                    <img src={logo} alt="SuperCodingBits" />
                </Link>
            </label>
            <ul>
                <li>
                    <Link className='links active' to="/">
                        <TiHome className='HeaderIcon' /> Home
                    </Link>
                </li>
                <li>
                    <Link className='links' to="/Blog">
                        <FaBlogger className='HeaderIcon' /> Blogs
                    </Link>
                </li>
                <li>
                    <Link className='links' to="/Projects">
                        <FaProjectDiagram className='HeaderIcon' /> Projects
                    </Link>
                </li>
            </ul>
        </nav>








        // <header>
        //     <a href="/" className="logo"><img src={logo} alt="SuperCodingBits" /></a>
        //     <div className={menuOpen ? "menu-toggle active" : "menu-toggle"} onClick={toggleMenu}></div>
        //     <nav className={menuOpen ? "active" : ""} >
        //         <ul>
        //             <li>
        //                 <Link className='links active' to="/">
        //                     <p><TiHome className='HeaderIcon' /> Home</p>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link className='links' to="/Blog">
        //                     <p><FaBlogger className='HeaderIcon' /> Blogs </p>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link className='links' to="/Projects">
        //                     <p><FaProjectDiagram className='HeaderIcon' /> Projects </p>
        //                 </Link>
        //             </li>
        //         </ul>
        //     </nav>
        //     <div className="clearfix"></div>
        // </header>
    );
}

export default Header;
