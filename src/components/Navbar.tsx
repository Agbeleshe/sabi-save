import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import Button from "./Button";
import sabiLogo from "../assets/sabiSave3.png";

interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Solution", path: "/solution" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const getLinkClass = (isActive: boolean) =>
    `font-medium hover:text-primary transition-colors ${
      isActive
        ? "text-primary"
        : isScrolled
        ? "text-dark"
        : pathname === "/"
        ? "text-black"
        : "text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-light shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="z-10">
            <img
              className={`h-[55px] w-[100px] md:h-[50px] ml-[-5px] md:w-[80px] ${
                !isScrolled && pathname !== "/" ? "bg-primary/50" : ""
              } rounded-md`}
              src={sabiLogo}
              alt="sabiSave logo"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 2xl:text-[1.4rem] ">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => getLinkClass(isActive)}
              >
                {name}
              </NavLink>
            ))}
            <Button
              className="2xl:text-[1.4rem]"
              href="#download"
              variant="primary"
            >
              <span>
                <Download size={20} className="mr-2" />
              </span>
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-10 text-red hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-light transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `text-dark font-medium hover:text-primary transition-colors ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
