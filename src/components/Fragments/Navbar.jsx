import { useEffect, useState } from "react";
import logo from "/src/assets/images/logo.png";
import { navItems } from "../../utils/data";
import { Link } from "react-scroll";
import Button from "../Elements/Button/Index";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white md:bg-transparent">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex items-center justify-between gap-8 text-base">
          <a
            href=""
            className="flex items-center space-x-3 text-2xl font-semibold"
          >
            <img
              src={logo}
              alt="logo website"
              className="items-center inline-block w-10"
            />
            <span className="text-[#263238]">Nexcent</span>
          </a>

          <ul className="hidden space-x-12 md:flex">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-grey900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="items-center hidden space-x-12 lg:flex">
            <a
              href="/"
              className="items-center hidden lg:flex text-brandPrimary hover:text-grey900"
            >
              Login
            </a>
            <Button classname="px-4 py-2 ">Sing up</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-neutralDGrey focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={` md:hidden px-4 mt-16 space-y-4 py-7 bg-brandPrimary ${
            isMenuOpen ? "fixed top-0 right-0 left-0 block" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
