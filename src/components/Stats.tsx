import React from "react";
import MotionAnimation from "../motion/MotionAnimation";

interface StatItemProps {
  number: string;
  label: string;
}
const Stats = () => {
  const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-gray-200">{label}</div>
    </div>
  );
  return (
    <div className="container mx-auto px-[5%]">
      <MotionAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 bg-black rounded-xl p-6 shadow-inner">
          <MotionAnimation delay={0.3} motion="slide-up">
            <StatItem number="10K+" label="Active Users" />
          </MotionAnimation>
          {/* <StatItem number="5+" label="Years Experience" /> */}
          <MotionAnimation delay={0.5} motion="slide-up">
            <StatItem number="24/7" label="Customer Support" />{" "}
          </MotionAnimation>

          <MotionAnimation delay={0.7} motion="slide-up">
            <StatItem number="99.9%" label="Uptime" />{" "}
          </MotionAnimation>
        </div>
      </MotionAnimation>
    </div>
  );
};

export default Stats;
