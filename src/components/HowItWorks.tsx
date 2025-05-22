import {
  Download,
  ThumbsUp,
  Smartphone,
  Settings,
  UserCheck,
  HandCoins,
} from "lucide-react";
import MotionAnimation from "../motion/MotionAnimation";

const userTypes = [
  {
    icon: <Smartphone className="w-12 h-12 text-blue-600" />,
    title: "Digital Wallet",
    subtitle: "For Traders, Artisans and Small business owners",
    description:
      "A comprehensive mobile wallet solution designed specifically for entrepreneurs and small business owners to manage their finances efficiently.",
  },
  {
    icon: <Settings className="w-12 h-12 text-green-600" />,
    title: "Agent Management Dashboard",
    subtitle: "For Individual Agents",
    description:
      "Register as an agent and onboard other wallet users while providing critical support services to grow your network and earnings.",
  },
];

const steps = [
  {
    number: 1,
    color: "yellow",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-200",
    title: "Download the mobile application",
    description: "Get the app from your preferred app store",
    icon: <Download color="orange" size={50} />,
  },
  {
    number: 2,
    color: "blue",
    bgColor: "bg-blue-100",
    textColor: "text-blue-200",
    title: "Register your details, verify your identity and open your account",
    description: "Complete the simple registration process to get started",
    icon: <UserCheck color="blue" size={50} />,
  },
  {
    number: 3,
    color: "orange",
    bgColor: "bg-orange-100",
    textColor: "text-orange-200",
    title: "Start Saving and enjoying other services",
    description: "Begin your financial journey with our comprehensive services",
    icon: <HandCoins color="red" size={50} />,
  },
];

function SectionTitle({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="py-16 px-4">
      <MotionAnimation motion="slide-up">
        <SectionTitle
          title="How SabiSave Works"
          subtitle="The application has been developed for two kind of users"
          centered
        />
      </MotionAnimation>

      {/* User Types Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <MotionAnimation delay={0.2} motion="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userTypes.map((userType, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 cursor-pointer hover:translate-y-1 ease-in-out duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                    {userType.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {userType.title}
                    </h4>
                    <p className="text-sm font-medium text-blue-600 mb-2">
                      {userType.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {userType.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionAnimation>
      </div>

      {/* Steps Section */}
      <MotionAnimation motion="slide-up">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            To enjoy SabiSave, kindly follow the simple steps below:
          </h3>
        </div>
      </MotionAnimation>

      <div className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <MotionAnimation
              key={step.number}
              delay={0.3 * step.number}
              motion="slide-down"
            >
              <div className="rounded-lg overflow-hidden cursor-pointer hover:translate-y-3 ease-in-out duration-500">
                <div className={`${step.bgColor} p-8 h-full`}>
                  <div className="flex flex-col items-center relative">
                    <div
                      className={`text-7xl font-bold absolute left-[-30px] top-[-35px] ${step.textColor} mb-4`}
                    >
                      {step.number}
                    </div>
                    <div className="rounded-full bg-white p-4 mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-black text-center">{step.description}</p>
                  </div>
                </div>
              </div>
            </MotionAnimation>
          ))}
        </div>
      </div>

      <MotionAnimation delay={0.3} motion="slide-up">
        <div className="text-center">
          <a href="#download">
            <button className="flex gap-2 mx-auto bg-primary text-white  hover:bg-primary/80 font-bold py-3 px-8 rounded-lg transition-all duration-300">
              <ThumbsUp /> Get started
            </button>
          </a>
        </div>
      </MotionAnimation>
    </div>
  );
}
