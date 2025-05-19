import React from "react";
import MotionAnimation from "../motion/MotionAnimation";
import CountUp from "react-countup";

interface StatItemProps {
  number: number; // change from string to number
  suffix?: string; // optional suffix like '+'
  label: string;
}

const Stats = () => {
  const StatItem: React.FC<StatItemProps> = ({ number, label, suffix }) => (
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-primary mb-2">
        <CountUp end={number} duration={5.5} suffix={suffix || ""} />
      </div>
      <div className="text-gray-200">{label}</div>
    </div>
  );

  return (
    <div className="container mx-auto px-[5%]">
      <MotionAnimation motion="bounce">
        <h1 className=" text-2xl md:text-4xl my-5 text-black mx-auto text-center">
          Where we are
        </h1>
      </MotionAnimation>
      <MotionAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 bg-black rounded-xl p-6 shadow-inner">
          <MotionAnimation delay={0.3} motion="slide-up">
            <StatItem
              number={5000}
              suffix="+"
              label="Active Registered Traders and Artisans"
            />
          </MotionAnimation>

          <MotionAnimation delay={0.5} motion="slide-up">
            <StatItem number={500} label="Verified Agents" />
          </MotionAnimation>

          <MotionAnimation delay={0.7} motion="slide-up">
            <StatItem
              number={30000}
              suffix="+"
              label="Transactions Processed"
            />
          </MotionAnimation>
        </div>
      </MotionAnimation>
    </div>
  );
};

export default Stats;
