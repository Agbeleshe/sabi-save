import {
  Shield,
  CreditCard,
  RefreshCw,
  Zap,
  LineChart,
  Users,
} from "lucide-react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Newsletter from "../components/Newsletter";
import DownloadCTA from "../components/DownloadCTA";
import solutionImg from "../assets/solutionImg.png";

function Solution() {
  const productFeatures = [
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Secure Transactions",
      description:
        "End-to-end encryption for all financial transactions and user data",
    },
    {
      icon: <CreditCard size={24} className="text-primary" />,
      title: "Digital Wallet",
      description:
        "Easy-to-use digital wallet for deposits, withdrawals, and transfers",
    },
    {
      icon: <RefreshCw size={24} className="text-primary" />,
      title: "Real-time Updates",
      description: "Instant transaction confirmations and balance updates",
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: "Micro-credit Access",
      description: "Eligibility for micro-loans based on saving history",
    },
    {
      icon: <LineChart size={24} className="text-primary" />,
      title: "Financial Analytics",
      description: "Track spending patterns and savings progress over time",
    },
    {
      icon: <Users size={24} className="text-primary" />,
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

  return (
    <>
      <Section className="pt-32">
        <SectionTitle title="Our Solution" subtitle="" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="mb-6 text-lg">
              SabiSave provides a robust financial solution specifically
              designed for traders and high volume cash handlers. Our platform
              combines ease of use with advanced security features to create a
              seamless experience for all users.
            </p>
            <p className="mb-6">
              The SabiSave mobile application enables users to process cash
              deposits with instant value, withdraw cash, verify account
              balances in real-time, and reconcile banking transactions—all from
              the convenience of their mobile device.
            </p>
            <p>
              Our solution addresses the unique challenges faced by traders in
              managing their finances, providing them with a secure and
              efficient alternative to traditional cash handling methods.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={solutionImg}
              alt="SabiSave Mobile App"
              className="rounded-lg shadow-xl max-w-full h-auto"
              width={500}
              height={375}
            />
          </div>
        </div>

        <SectionTitle
          title="Product Features"
          subtitle="Discover the powerful features that make SabiSave the ideal solution for traders"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Benefits for Traders</h2>
            <ul className="space-y-4">
              {traderBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 font-bold">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Benefits for Agents</h2>
            <ul className="space-y-4">
              {agentBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 font-bold">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          title="How It Works"
          subtitle="A simple guide to getting started with SabiSave"
          centered
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Download the App</h3>
              <p>Get the SabiSave app from your preferred app store</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p>Register as a trader or agent with minimal documentation</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Start Saving</h3>
              <p>Make deposits and manage your finances securely</p>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">
              Interactive Demonstration
            </h3>
            <p className="text-center mb-6">
              Watch our interactive demonstration to see how SabiSave works in
              action.
            </p>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video demonstration coming soon</p>
            </div>
          </div>
        </div>
      </Section>

      <Newsletter />
      <DownloadCTA />
    </>
  );
}

export default Solution;
