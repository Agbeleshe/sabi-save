import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import sabiLogo from "../assets/sabiSave3.png";
interface NavbarProps {
  isScrolled: boolean;
}

function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              className="h-[55px] w-[100px] md:h-[50px] ml-[-5px]  md:w-[80px]"
              src={sabiLogo}
              alt="sabiSave logo"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` font-medium hover:text-primary transition-colors ${
                  isActive
                    ? "text-primary"
                    : isScrolled
                    ? "text-dark"
                    : "text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` font-medium hover:text-primary transition-colors ${
                  isActive
                    ? "text-primary"
                    : isScrolled
                    ? "text-dark"
                    : "text-white"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/solution"
              className={({ isActive }) =>
                ` font-medium hover:text-primary transition-colors ${
                  isActive
                    ? "text-primary"
                    : isScrolled
                    ? "text-dark"
                    : "text-white"
                }`
              }
            >
              Our Solution
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` font-medium hover:text-primary transition-colors ${
                  isActive
                    ? "text-primary"
                    : isScrolled
                    ? "text-dark"
                    : "text-white"
                }`
              }
            >
              Contact Us
            </NavLink>
            <Button href="#download" variant="primary">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-10 text-dark hover:text-primary transition-colors"
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-dark font-medium hover:text-primary transition-colors ${
                    isActive ? "text-primary" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-dark font-medium hover:text-primary transition-colors ${
                    isActive ? "text-primary" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/solution"
                className={({ isActive }) =>
                  `text-dark font-medium hover:text-primary transition-colors ${
                    isActive ? "text-primary" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Our Solution
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-dark font-medium hover:text-primary transition-colors ${
                    isActive ? "text-primary" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
