import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export const useNavItems = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = (
    <>
      {["Home", "About", "Skill", "Projects", "Education", "Contact"].map(
        (text) => (
          <li key={text}>
            <ScrollLink
              to={text.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer group relative text-white px-2 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {text}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </ScrollLink>
          </li>
        )
      )}
    </>
  );

  return [ navItems, mobileOpen, setMobileOpen];
};
