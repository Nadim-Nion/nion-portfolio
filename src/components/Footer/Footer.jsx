import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavItems } from "../Navbar/useNavItems";

const Footer = () => {
  const [navItems] = useNavItems();

  return (
    <footer className="footer footer-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-neutral-content rounded p-10">
      <h2 className="font-bold text-3xl text-purple-700">Nadim Mahmud Nion</h2>
      <nav>
        <ul className="flex flex-wrap justify-center md:flex-nowrap md:justify-normal gap-6 items-center">
          {navItems}
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://twitter.com/NionHunter">
            <FaXTwitter className="text-2xl" />
          </Link>
          <Link to="https://www.linkedin.com/in/nadim-mahmud-nion-0546151a9">
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link to="https://github.com/Nadim-Nion">
            <FaGithub className="text-2xl" />
          </Link>
          <Link to="https://www.facebook.com/NadimMahmudNion">
            <FaFacebook className="text-2xl" />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Crafting intuitive and responsive user experiences with clean,
          efficient code.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
