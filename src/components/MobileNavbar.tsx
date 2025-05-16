import { NavLink } from "react-router-dom";
import { Download } from "lucide-react";
import MotionAnimation from "../motion/MotionAnimation";

interface NavLinkItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

interface MobileNavigationProps {
  toggleMenu: (value: boolean) => void;
  navLinks: NavLinkItem[];
}

export default function MobileNavigation({
  toggleMenu,
  navLinks,
}: MobileNavigationProps) {
  const handleNav = () => toggleMenu(false);

  return (
    <div className="flex flex-col max-w-sm bg-white h-full w-full text-black shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center p-4 h-[80px] border-b border-gray-200" />

      {/* Navigation Items */}
      <div className="flex flex-col py-2">
        {navLinks.map(({ name, path, icon: Icon }, index) => (
          <MotionAnimation key={path} motion="slide-left" delay={index * 0.1}>
            <NavLink
              to={path}
              onClick={handleNav}
              className={({ isActive }) =>
                `py-4 px-4 flex items-center gap-3 text-[20px] transition-colors ${
                  isActive ? "text-primary" : "text-black hover:text-primary"
                }`
              }
            >
              <Icon size={20} />
              {name}
            </NavLink>
          </MotionAnimation>
        ))}
      </div>

      {/* Download Button */}
      <div className="mt-auto p-4 border-t border-gray-200">
        <MotionAnimation delay={0.6} motion="slide-up">
          <a href="#download" className="p-4">
            <button
              onClick={handleNav}
              className="w-full flex justify-center gap-2 bg-primary text-white py-3 rounded-md font-medium"
            >
              <Download size={20} /> Download App
            </button>
          </a>
        </MotionAnimation>
      </div>
    </div>
  );
}
