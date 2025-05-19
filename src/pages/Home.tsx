// import React from "react";
// import { Smartphone, Users, Coins, BarChart3 } from "lucide-react";
// import HeroSection from "../components/HeroSection";
//import Section from "../components/Section";
// import SectionTitle from "../components/SectionTitle";
// import FeatureCard from "../components/FeatureCard";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import DownloadCTA from "../components/DownloadCTA";
import Features from "../components/Features";
import FinancialInclusionComponent from "../components/FinancialInclusionComponent";
import NewHeroSection from "../components/NewHeroSection";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Stats from "../components/Stats";
import ExecutiveTeam from "../components/ExecutiveTeam";

function Home() {
  // const features = [
  //   {
  //     icon: Smartphone,
  //     title: "Mobile Application",
  //     description:
  //       "Our user-friendly mobile app allows traders to manage their savings on the go, with real-time balance updates and transaction history.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Trader Registration",
  //     description:
  //       "Easy and secure registration process for traders with minimal documentation required to get started.",
  //   },
  //   {
  //     icon: BarChart3,
  //     title: "Admin Dashboard",
  //     description:
  //       "Comprehensive dashboard for agents to monitor and manage trader accounts, transactions, and performance metrics.",
  //   },
  //   {
  //     icon: Coins,
  //     title: "Wallet Functionality",
  //     description:
  //       "Secure digital wallet for handling cash deposits, withdrawals, and fund transfers with instant confirmation.",
  //   },
  // ];

  return (
    <>
      {/* <HeroSection /> */}
      <NewHeroSection />

      <Stats />

      <FinancialInclusionComponent />

      <Features />

      <DownloadCTA />

      <FAQ />

      <TestimonialCarousel />

      <ExecutiveTeam />

      {/* <Section id="features">
        <SectionTitle
          title="Key Features"
          subtitle="Explore the powerful features that make SabiSave the perfect solution for traders."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section> */}
      <Newsletter />

      {/* <Section background="primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Value Proposition</h2>
            <p className="mb-6 text-lg">
              An online solution that provides seamless savings to traders,
              eliminating the risk of cash handling and guaranteeing access to
              micro-credit facilities.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span>
                  Secure digital transactions eliminating cash handling risks
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span>
                  Access to micro-credit facilities based on savings history
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span>Real-time transaction tracking and balance updates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span>
                  Seamless integration with existing financial infrastructure
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Traders using SabiSave"
              className="rounded-lg shadow-xl max-w-full h-auto"
              width={500}
              height={375}
            />
          </div>
        </div>
      </Section> */}
    </>
  );
}

export default Home;
