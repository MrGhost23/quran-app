import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/links";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <div className="ml-auto md:w-48 flex-shrink-0">
          <p className="text-green-600 text-3xl font-bold">قرآن</p>
        </div>

        <nav className="hidden lg:contents">
          <ul className="ml-auto flex items-center justify-center font-semibold text-xl">
            <li className="ml-2 lg:ml-4 relative inline-block text-green-600">
              قرآن
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">الأحاديث</li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              مواعيد الصلاة
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">حصن المسلم</li>
            <li className="ml-2 lg:ml-4 relative inline-block">المفضلة</li>
          </ul>
        </nav>
        <li className="lg:hidden flex">
          <FaBars />
        </li>
      </div>
      <hr />
    </header>
  );
};
export default Navbar;
