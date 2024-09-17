import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-neutral-content rounded p-10">
            <h2 className="font-bold text-3xl text-purple-700">Nadim Mahmud Nion</h2>
            <ul className="menu menu-horizontal px-1 text-white">
                <li><Link className="hover:text-blue-400 transition-colors" to="/">Home</Link></li>
                <li>
                    <Link className="hover:text-blue-400 transition-colors" to="/about">About</Link>
                </li>
                <li><Link className="hover:text-blue-400 transition-colors" to="/skill">Skill</Link></li>
                <li><Link className="hover:text-blue-400 transition-colors" to="/projects">Projects</Link></li>
                <li><Link className="hover:text-blue-400 transition-colors" to="/education">Education</Link></li>
                <li><Link className="hover:text-blue-400 transition-colors" to="/contact">Contact</Link></li>
            </ul>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to="https://twitter.com/NionHunter">
                        <FaXTwitter className='text-2xl' />
                    </Link>
                    <Link to="https://www.linkedin.com/in/nadim-mahmud-nion-0546151a9">
                        <FaLinkedin className='text-2xl' />
                    </Link>
                    <Link to="https://github.com/Nadim-Nion">
                        <FaGithub className='text-2xl' />
                    </Link>
                    <Link to="https://www.facebook.com/NadimMahmudNion">
                        <FaFacebook className='text-2xl' />
                    </Link>
                </div>
            </nav>
            <aside>
                <p>Building seamless user interfaces, one line of code at a time</p>
            </aside>
        </footer>
    );
};

export default Footer;