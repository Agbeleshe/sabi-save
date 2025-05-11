import { Download, HandCoins, ScanFace, ThumbsUp } from "lucide-react";
import MotionAnimation from "../motion/MotionAnimation";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: 1,
    color: "yellow",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-200",
    title: "Download the App",
    description: "Get the SabiSave app from your preferred app store",
    icon: <Download color="orange" size={50} />,
  },
  {
    number: 2,
    color: "blue",
    bgColor: "bg-blue-100",
    textColor: "text-blue-200",
    title: "Complete KYC",
    description: "Verify your identity using your government-issued ID",
    icon: <ScanFace color="blue" size={50} />,
  },
  {
    number: 3,
    color: "orange",
    bgColor: "bg-orange-100",
    textColor: "text-orange-200",
    title: "Start Saving",
    description:
      "Enjoy secured & reliable saving experience with our application",
    icon: <HandCoins color="red" size={50} />,
  },
];

export default function HowItWorks() {
  return (
    <div className="py-16 px-4">
      <MotionAnimation motion="slide-up">
        <SectionTitle
          title="How It Works"
          subtitle="A simple guide to getting started with SabiSave"
          centered
        />
      </MotionAnimation>
      <div className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <MotionAnimation delay={0.3 * step.number} motion="slide-down">
              <div
                key={step.number}
                className="rounded-lg overflow-hidden cursor-pointer hover:translate-y-3 ease-in-out duration-500"
              >
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
                    <h3 className="text-xl font-bold text-black mb-3">
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
            {" "}
            <button className="flex gap-2 mx-auto bg-primary text-black hover:text-primary hover:bg-black font-bold py-3 px-8 rounded-lg transition-all duration-300">
              <ThumbsUp /> Get started
            </button>
          </a>
        </div>
      </MotionAnimation>
    </div>
  );
}
