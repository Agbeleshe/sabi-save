import { Wallet, PiggyBank, ArrowLeftRight, TrendingUp } from "lucide-react";
import MotionAnimation from "../motion/MotionAnimation";

export default function FinancialServicesCard() {
  const services = [
    {
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      title: "Create a digital financial Identity",
      description:
        "Our wallet-based solution, is the first step for most individuals to own a digital financial identity that can enable them transact in the financial sector.",
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-green-600" />,
      title: "Savings",
      description:
        "Individuals can save as little as ₦500.00 daily, or more based on their preferred saving plan on a daily or weekly basis.",
    },
    {
      icon: <ArrowLeftRight className="w-8 h-8 text-purple-600" />,
      title: "Transfer and Receive Funds",
      description:
        "Users can make and receive transfers from their wallet to and from other 3rd party accounts",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Grow Income and Earning",
      description:
        "The funds saved are interest bearing, and individuals can also register as agents who will serve as the primary banker to the users of the solution.",
    },
  ];

  return (
    <div className=" mx-auto">
      <div className="grid grid-cols-1  gap-6">
        {services.map((service, index) => (
          <MotionAnimation delay={index * 0.1} key={index} motion="slide-up">
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-3 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </MotionAnimation>
        ))}
      </div>
    </div>
  );
}
