import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white pb-7">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <div className="ml-auto md:w-48 flex-shrink-0">
          <Link className="text-green-600 text-3xl font-bold" to="/">
            قرآن
          </Link>
        </div>

        <nav
          className={`fixed top-0 left-0 z-50 w-fit h-screen block px-8 py-20 bg-white shadow-xl transition-all duration-700 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:h-fit lg:contents lg:p-0 lg:bg-transparent lg:shadow-none lg:translate-x-0`}
        >
          <ul className="ml-auto flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-4 font-semibold text-xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-gray-400"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </ul>

          <IoClose
            className="absolute top-9 right-8 lg:hidden text-2xl text-gray-600 cursor-pointer transition duration-500 hover:text-green-600 hover:scale-110"
            onClick={() => setIsOpen(false)}
          />
        </nav>
        <li className="lg:hidden flex" onClick={() => setIsOpen(true)}>
          <FaBars className="text-xl text-gray-600 cursor-pointer transition duration-500 hover:text-green-600 hover:scale-110" />
        </li>
      </div>
    </header>
  );
};
export default Navbar;
