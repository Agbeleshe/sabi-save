import {
  Shield,
  CreditCard,
  RefreshCw,
  Zap,
  LineChart,
  Users,
  ArrowRight,
  Phone,
  Download,
} from "lucide-react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Newsletter from "../components/Newsletter";
import DownloadCTA from "../components/DownloadCTA";
import PageBanner from "../components/PageBanner";
import solutionImg from "../assets/solutionImg.png";
import bannerImg from "../assets/longImg.jpg";
import MotionAnimation from "../motion/MotionAnimation";
import HowItWorks from "../components/HowItWorks";
import { Link } from "react-router-dom";
import bgImg from "../assets/marketWomanTwo.jpg";
// import tubeTumbnail from "../assets/temi.png";
// import { useState } from "react";

function Solution() {
  // const [videoPlaying, setVideoPlaying] = useState(false);

  const productFeatures = [
    {
      icon: <Shield size={28} className="text-white" />,
      title: "Secure Transactions",
      description:
        "End-to-end encryption for all financial transactions and user data",
      bgIcon: <Shield className="text-gray-800" size={200} />,
    },
    {
      icon: <CreditCard size={28} className="text-white" />,
      title: "Digital Wallet",
      description:
        "Easy-to-use digital wallet for deposits, withdrawals, and transfers",
      bgIcon: <CreditCard className="text-gray-800" size={200} />,
    },
    {
      icon: <RefreshCw size={28} className="text-white" />,
      title: "Real-time Updates",
      description: "Instant transaction confirmations and balance updates",
      bgIcon: <RefreshCw className="text-gray-800" size={200} />,
    },
    {
      icon: <Zap size={28} className="text-white" />,
      title: "Micro-credit Access",
      description: "Eligibility for micro-loans based on saving history",
      bgIcon: <Zap className="text-gray-800" size={200} />,
    },
    {
      icon: <LineChart size={28} className="text-white" />,
      title: "Financial Analytics",
      description: "Track spending patterns and savings progress over time",
      bgIcon: <LineChart className="text-gray-800" size={200} />,
    },
    {
      icon: <Users size={28} className="text-white" />,
      title: "Agent Network",
      description: "Access to authorized agents for in-person assistance",
      bgIcon: <Users className="text-gray-800" size={200} />,
    },
  ];

  const traderBenefits = [
    "Elimination of cash handling risks",
    "Secure digital storage of savings",
    "Access to micro-credit facilities",
    "Transparent transaction history",
    "Convenience of mobile banking",
    "Financial inclusion in the digital economy",
  ];

  const agentBenefits = [
    "Increased customer base through digital platform",
    "Streamlined customer management",
    "Reduced operational risks",
    "Enhanced transaction security",
    "Real-time performance analytics",
    "Additional revenue streams through commissions",
  ];

  // const handleVideoClick = () => {
  //   setVideoPlaying(true);
  // };

  return (
    <div className="max-w-[100vw] overflow-hidden">
      {/* Banner Section */}
      <PageBanner
        title="SabiSave Solution"
        subtitle="Transform Your Trading Experience with Secure Digital Finance"
        backgroundImage={bannerImg}
      />

      <Section className="pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <MotionAnimation>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 relative inline-block">
                Smart Financial Solutions 💰
                <MotionAnimation delay={0.3}>
                  <span className="absolute -bottom-2 left-0 w-[40%] h-1 bg-red"></span>
                </MotionAnimation>
              </h2>
            </MotionAnimation>
            {/* <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              SabiSave provides a robust financial solution specifically
              designed for traders and high volume cash handlers. Our platform
              combines ease of use with advanced security features to create a
              seamless experience for all users.
            </p> */}
            {/* <p className="mb-6">
              The SabiSave mobile application enables users to process cash
              deposits with instant value, withdraw cash, verify account
              balances in real-time, and reconcile banking transactions—all from
              the convenience of their mobile device.
            </p> */}
            <MotionAnimation>
              <p className="text-xl md:text-4xl">
                Our solution addresses the unique challenges faced by traders in
                managing their finances, providing them with a secure and
                efficient alternative to traditional cash handling methods.
              </p>
            </MotionAnimation>
            <MotionAnimation delay={0.3}>
              <a
                href="#features"
                className="inline-flex items-center bg-red text-white px-6 py-3 rounded-lg font-medium hover:text-primary hover:bg-black transition-colors duration-300 mt-6"
              >
                Explore Features <ArrowRight size={16} className="ml-2" />
              </a>
            </MotionAnimation>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-red rounded-lg"></div>
              <MotionAnimation motion="slide-left">
                <img
                  src={solutionImg}
                  alt="SabiSave Mobile App"
                  className="rounded-lg shadow-xl max-w-full h-auto relative z-10"
                  width={500}
                  height={375}
                />
              </MotionAnimation>
            </div>
          </div>
        </div>

        <div id="features" className="py-8">
          <MotionAnimation motion="slide-up">
            <SectionTitle
              title="Product Features"
              subtitle="Discover the powerful features that make SabiSave the ideal solution for traders"
              centered
            />
          </MotionAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productFeatures.map((feature, index) => (
              <MotionAnimation delay={0.1 * index} motion="slide-up">
                <div
                  key={index}
                  className="relative overflow-hidden bg-black min-h-[200px] to-white border border-red p-6 rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <MotionAnimation delay={0.1 * index} motion="slide-left">
                    <div className="absolute text-white ease-in-out right-[-5]  z-10">
                      {feature.bgIcon}
                    </div>
                  </MotionAnimation>
                  <div className="inline-flex items-center justify-center p-4 bg-none rounded-full mb-4 relative z-10">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-primary relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 relative z-10">
                    {feature.description}
                  </p>
                </div>
              </MotionAnimation>
            ))}
          </div>
        </div>
      </Section>

      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-10 px-10 relative"
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-0"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[900px] mx-auto z-10 ">
          <div>
            <MotionAnimation motion="slide-up">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Benefits for Traders
              </h2>
            </MotionAnimation>
            <ul className="space-y-4">
              {traderBenefits.map((benefit, index) => (
                <MotionAnimation delay={0.1 * index}>
                  <li key={index} className="flex items-start text-white">
                    <span className="mr-2 font-bold text-xl">✓</span>
                    <span>{benefit}</span>
                  </li>
                </MotionAnimation>
              ))}
            </ul>
          </div>
          <div>
            <MotionAnimation motion="slide-up">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Benefits for Agents
              </h2>
            </MotionAnimation>
            <ul className="space-y-4">
              {agentBenefits.map((benefit, index) => (
                <MotionAnimation delay={0.1 * index}>
                  <li key={index} className="flex items-start text-white">
                    <span className="mr-2 font-bold text-xl">✓</span>
                    <span>{benefit}</span>
                  </li>
                </MotionAnimation>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Section className="bg-black ">
        <HowItWorks />
      </Section>

      <Section className="py-16 bg-red text-black">
        <div className="text-center max-w-3xl mx-auto">
          <MotionAnimation>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your{" "}
              <span className="text-primary">Saving </span> Experience?
            </h2>
          </MotionAnimation>
          <MotionAnimation motion="slide-up">
            <p className="text-lg mb-8 text-gray-200">
              Join thousands of traders who are already benefiting from our
              innovative financial solutions.
            </p>
          </MotionAnimation>
          <MotionAnimation delay={0.3} motion="slide-down">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className=" px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="flex gap-3 mx-auto justify-center">
                  <Phone size={20} /> Contact Us
                </span>
              </Link>
              <a
                href="#download"
                className="flex gap-2 justify-center px-8 py-3 bg-black text-white rounded-lg font-medium hover:text-red transition-colors duration-300"
              >
                <Download size={20} />
                Download App
              </a>
            </div>
          </MotionAnimation>
        </div>
      </Section>

      <Newsletter />
      <DownloadCTA />
    </div>
  );
}

export default Solution;
