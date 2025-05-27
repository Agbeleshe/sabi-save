import { Smartphone, Settings } from "lucide-react";
import MotionAnimation from "../motion/MotionAnimation";

export default function SabiSaveHowItWorks() {
  const userTypes = [
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Digital Wallet",
      subtitle: "For Traders, Artisans and Small business owners",
      description:
        "A user friendly and secure mobile wallet that enables users to perform basic banking services in real time.",
    },
    {
      icon: <Settings className="w-12 h-12 text-green-600" />,
      title: "Agent Management Dashboard",
      subtitle: "For Individual Agents",
      description:
        "Register as an agent and onboard other wallet users while providing critical support services to grow your network and earnings.",
    },
  ];

  return (
    <div className="mx-auto my-5">
      {/* User Types Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 ">
          Key features of SabiSave
        </h3>
        <div className="grid grid-cols-1  gap-6">
          {userTypes.map((userType, index) => (
            <MotionAnimation delay={index * 0.1} key={index} motion="slide-up">
              {" "}
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                    {userType.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {userType.title}
                    </h4>
                    <p className="text-sm font-medium text-blueOne mb-2">
                      {userType.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {userType.description}
                    </p>
                  </div>
                </div>
              </div>
            </MotionAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
