import {
  Shield,
  CreditCard,
  RefreshCw,
  Zap,
  LineChart,
  Users,
  ArrowRight,
} from "lucide-react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Newsletter from "../components/Newsletter";
import DownloadCTA from "../components/DownloadCTA";
import PageBanner from "../components/PageBanner";
import solutionImg from "../assets/solutionImg.png";
import bannerImg from "../assets/longImg.jpg";
import tubeTumbnail from "../assets/temi.png";
import { useState } from "react";

function Solution() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const productFeatures = [
    {
      icon: <Shield size={28} className="text-white" />,
      title: "Secure Transactions",
      description:
        "End-to-end encryption for all financial transactions and user data",
    },
    {
      icon: <CreditCard size={28} className="text-white" />,
      title: "Digital Wallet",
      description:
        "Easy-to-use digital wallet for deposits, withdrawals, and transfers",
    },
    {
      icon: <RefreshCw size={28} className="text-white" />,
      title: "Real-time Updates",
      description: "Instant transaction confirmations and balance updates",
    },
    {
      icon: <Zap size={28} className="text-white" />,
      title: "Micro-credit Access",
      description: "Eligibility for micro-loans based on saving history",
    },
    {
      icon: <LineChart size={28} className="text-white" />,
      title: "Financial Analytics",
      description: "Track spending patterns and savings progress over time",
    },
    {
      icon: <Users size={28} className="text-white" />,
      title: "Agent Network",
      description: "Access to authorized agents for in-person assistance",
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

  const handleVideoClick = () => {
    setVideoPlaying(true);
  };

  return (
    <>
      {/* Banner Section */}
      <PageBanner
        title="SabiSave Solution"
        subtitle="Transform Your Trading Experience with Secure Digital Finance"
        backgroundImage={bannerImg}
      />

      <Section className="pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 relative inline-block">
              Smart Financial Solutions 💰
              <span className="absolute -bottom-2 left-0 w-[40%] h-1 bg-red"></span>
            </h2>
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
            <p className="text-xl md:text-4xl">
              Our solution addresses the unique challenges faced by traders in
              managing their finances, providing them with a secure and
              efficient alternative to traditional cash handling methods.
            </p>
            <a
              href="#features"
              className="inline-flex items-center bg-red text-white px-6 py-3 rounded-lg font-medium hover:text-primary hover:bg-black transition-colors duration-300 mt-6"
            >
              Explore Features <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-red rounded-lg"></div>
              <img
                src={solutionImg}
                alt="SabiSave Mobile App"
                className="rounded-lg shadow-xl max-w-full h-auto relative z-10"
                width={500}
                height={375}
              />
            </div>
          </div>
        </div>

        <div id="features" className="py-8">
          <SectionTitle
            title="Product Features"
            subtitle="Discover the powerful features that make SabiSave the ideal solution for traders"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-black to-white border border-red p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center p-4 bg-black rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="primary" className="bg-red">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Benefits for Traders
            </h2>
            <ul className="space-y-4">
              {traderBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-white">
                  <span className="mr-2 font-bold text-xl">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Benefits for Agents
            </h2>
            <ul className="space-y-4">
              {agentBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-white">
                  <span className="mr-2 font-bold text-xl">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-black text-white">
        <SectionTitle
          title="How It Works"
          subtitle="A simple guide to getting started with SabiSave"
          centered
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-black p-6 rounded-lg hover:bg-black/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red rounded-full mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Download the App</h3>
              <p className="text-gray-300">
                Get the SabiSave app from your preferred app store
              </p>
            </div>
            <div className="text-center bg-black p-6 rounded-lg hover:bg-black/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red rounded-full mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p className="text-gray-300">
                Register as a trader or agent with minimal documentation
              </p>
            </div>
            <div className="text-center bg-black p-6 rounded-lg hover:bg-black/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red rounded-full mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Start Saving</h3>
              <p className="text-gray-300">
                Make deposits and manage your finances securely
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red to-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">
              Watch How SabiSave Works
            </h3>
            <p className="text-center mb-6 text-gray-200">
              See our platform in action through this interactive demonstration
            </p>

            {videoPlaying ? (
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="SabiSave Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            ) : (
              <div
                className="aspect-w-16 aspect-h-9 bg-black rounded-lg flex items-center justify-center cursor-pointer relative overflow-hidden"
                onClick={handleVideoClick}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src={tubeTumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm">
                  2:45
                </div>
                <div className="absolute bottom-4 right-4 text-white font-medium bg-red px-3 py-1 rounded text-sm">
                  Click to Play
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-red text-black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Trading Experience?
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Join thousands of traders who are already benefiting from our
            innovative financial solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="#download"
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:text-red transition-colors duration-300"
            >
              Download App
            </a>
          </div>
        </div>
      </Section>

      <Newsletter />
      <DownloadCTA />
    </>
  );
}

export default Solution;
