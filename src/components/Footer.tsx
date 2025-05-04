import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../assets/sabiSaveLogo.png";
import playStore from "../assets/playStore.png";
import appStore from "../assets/appStore.png";
import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Social */}
          <div>
            <div className="mb-6">
              <img src={Logo} alt="Logo" height={100} width={100} />
            </div>
            <p className="mb-6 opacity-80">
              Creating cutting-edge technology solutions for the financial
              services sector.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="text-light hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-light hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-light hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/solution"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Our Solution
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#terms"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#cookie"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Safety and Security
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-primary" />
                <span className="opacity-80">
                  123 Financial District, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary" />
                <span className="opacity-80">+234 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary" />
                <span className="opacity-80">info@sabisave.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-4 sm:mb-0 opacity-80">Download our app:</p>
            <div className="flex space-x-4">
              <Button href="#app-store" size="sm">
                <img src={playStore} height={30} width={30} />{" "}
                <span>App Store</span>
              </Button>
              <Button href="#play-store" size="sm">
                <img src={appStore} height={30} width={30} />{" "}
                <span> Play Store</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center opacity-70">
          <p>© {new Date().getFullYear()} SabiSave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
