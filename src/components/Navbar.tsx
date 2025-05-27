import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Lightbulb, Phone } from "lucide-react";
import Button from "./Button";
import sabiLogo from "../assets/sabiSave3.png";
import MobileNavigation from "./MobileNavbar";
import Lottie from "lottie-react";
import lottieDownload from "../assets/lottie/download.json";

interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Our Solution", path: "/solution", icon: Lightbulb },
  { name: "Contact Us", path: "/contact", icon: Phone },
];

function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const getLinkClass = (isActive: boolean) =>
    `font-medium hover:text-primary transition-colors flex items-center gap-1 ${
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
              className={`h-[55px] w-[60px] md:h-[60px] ml-[-5px] md:w-[60px] ${
                !isScrolled && pathname !== "/" && !isMenuOpen
                  ? "bg-primary/0"
                  : ""
              } rounded-md`}
              src={sabiLogo}
              alt="sabiSave logo"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 2xl:text-[1.4rem]">
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
              className="2xl:text-[1.4rem] text-white"
              href="#download"
              variant="primary"
            >
              <Lottie
                animationData={lottieDownload}
                loop={true}
                autoplay
                style={{ width: "20px", height: "20px", margin: 5 }}
              />
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
            <MobileNavigation toggleMenu={toggleMenu} navLinks={navLinks} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
