import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/links";
import { FaBars } from "react-icons/fa6";

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

        <nav className="hidden lg:contents">
          <ul className="ml-auto flex items-center justify-center font-semibold text-xl">
            <li className="ml-2 lg:ml-4 relative inline-block">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-gray-400"
                }
              >
                قرآن
              </NavLink>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <NavLink
                to="/hadith"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-gray-400"
                }
              >
                أحاديث
              </NavLink>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <NavLink
                to="/pray"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-gray-400"
                }
              >
                مواعيد الصلاة
              </NavLink>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <NavLink
                to="/hisn"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-gray-400"
                }
              >
                حصن المسلم
              </NavLink>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-gray-400"
                }
              >
                المفضلة{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
        <li className="lg:hidden flex">
          <FaBars />
        </li>
      </div>
    </header>
  );
};
export default Navbar;
