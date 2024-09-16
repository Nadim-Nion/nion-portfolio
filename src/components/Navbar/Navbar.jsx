import React from 'react';
import { FaRegAddressCard } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <ul className="menu menu-horizontal px-1 text-white">
            <li><NavLink to="/">Home</NavLink></li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li><NavLink to="/skill">Skill</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/education">Education</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </>;

    return (
        <div className="navbar bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">
                    <FaRegAddressCard className='text-4xl' />
                    Portfolio
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-active btn-neutral">Resume</button>
            </div>
        </div>
    );
};

export default Navbar;