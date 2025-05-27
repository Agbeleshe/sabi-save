import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { PiTiktokLogoFill } from "react-icons/pi";

import Logo from "../assets/sabiSave3.png";
import playStore from "../assets/playStore.svg";
import appStore from "../assets/appStore.svg";
import Button from "./Button";
import MotionAnimation from "../motion/MotionAnimation";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/sabi_save?igsh=MXYydnJiaTBpNXd2NQ==",
  },
  {
    icon: PiTiktokLogoFill,
    href: "https://www.tiktok.com/@sabi_save?is_from_webapp=1&sender_device=pc",
  },
  { icon: FaXTwitter, href: "https://x.com/Sabi_Save?s=08" },

  { icon: Linkedin, href: "https://www.linkedin.com/company/sabisave/" },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/solution", label: "Our Solution" },
  { to: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { href: "#terms", label: "Terms and Conditions" },
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#cookie", label: "Cookie Policy" },
  { href: "#safety", label: "Safety and Security" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "123 Financial District, Lagos, Nigeria",
    verticalAlign: true,
  },
  {
    icon: Phone,
    text: "+2347013907862",
    href: "https://wa.me/2347013907862",
  },
  { icon: Mail, text: "info@sabisave.com" },
];

const linkClass =
  "opacity-80 hover:opacity-100 hover:text-primary transition-colors";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Social */}
          <div>
            <MotionAnimation>
              <div className="mb-6">
                <img src={Logo} alt="Logo" height={100} width={100} />
              </div>
            </MotionAnimation>
            <MotionAnimation delay={0.3}>
              <p className="mb-6 opacity-80">
                Creating simple digital solutions for our people to save and
                manage their funds in a better way.
              </p>
            </MotionAnimation>

            <MotionAnimation>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="text-light hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </MotionAnimation>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }, index) => (
                <MotionAnimation delay={0.3 * index} motion="slide-up">
                  <li key={to}>
                    <Link to={to} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                </MotionAnimation>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map(({ href, label }, index) => (
                <MotionAnimation delay={0.3 * index} motion="slide-up">
                  {" "}
                  <li key={href}>
                    <a href={href} className={linkClass}>
                      {label}
                    </a>
                  </li>
                </MotionAnimation>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map(
                ({ icon: Icon, text, verticalAlign, href }, index) => (
                  <MotionAnimation
                    delay={0.3 * index}
                    motion="slide-up"
                    key={index}
                  >
                    <li
                      className={`flex items-${
                        verticalAlign ? "start" : "center"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={`mr-2 ${
                          verticalAlign ? "mt-1" : ""
                        } text-white`}
                      />
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-80 hover:text-primary transition-colors"
                        >
                          {text}
                        </a>
                      ) : (
                        <span className="opacity-80">{text}</span>
                      )}
                    </li>
                  </MotionAnimation>
                )
              )}
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-4 sm:mb-0 opacity-80">Download our app:</p>
            <MotionAnimation>
              <div className="flex space-x-4">
                <Button variant="nutral" href="#app-store" size="sm">
                  <img
                    src={playStore}
                    height={15}
                    width={15}
                    className="mr-1"
                  />
                  <span>Play Store</span>
                </Button>
                <Button variant="secondary" href="#play-store" size="sm">
                  <img src={appStore} height={15} width={15} className="mr-1" />
                  <span>App store</span>
                </Button>
              </div>
            </MotionAnimation>
          </div>
        </div>

        {/* Copyright */}
        <MotionAnimation>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center opacity-70">
            <p>© {new Date().getFullYear()} SabiSave. All rights reserved.</p>
          </div>
        </MotionAnimation>
      </div>
    </footer>
  );
}

export default Footer;
