import Section from "../components/Section";
// import SectionTitle from "../components/SectionTitle";
import Newsletter from "../components/Newsletter";
import DownloadCTA from "../components/DownloadCTA";
import PageBanner from "../components/PageBanner";
import img from "../assets/sabi/newAiKekeMan.jpg";
import {
  ArrowRight,
  Shield,
  Globe,
  Zap,
  Phone,
  Download,
  Info,
} from "lucide-react";
import bannerImg from "../assets/sabi/hajiyaTailor.jpg";
import sabiMockHand from "../assets/sabiMockHand.png";
import MotionAnimation from "../motion/MotionAnimation";
import HowItWorks from "../components/HowItWorks";
import { Link } from "react-router-dom";
import Stats from "../components/Stats";
import ExecutiveTeam from "../components/ExecutiveTeam";
// import { useState } from "react";

// Define TypeScript interfaces
// interface AgeGroup {
//   name: string;
//   age: string;
//   description: string;
//   icon?: React.ElementType;
// }

function About() {
  // Enhanced age groups with icons
  // const ageGroups: AgeGroup[] = [
  //   {
  //     name: "Gen Z",
  //     age: "16-24 years",
  //     description:
  //       "Tech-savvy young adults who prefer digital solutions for financial management.",
  //     icon: Zap,
  //   },
  //   {
  //     name: "Millennials",
  //     age: "25-39 years",
  //     description:
  //       "Working professionals seeking convenient and secure financial tools for daily transactions.",
  //     icon: Globe,
  //   },
  //   {
  //     name: "Gen X",
  //     age: "40-65 years",
  //     description:
  //       "Established traders who want to transition from traditional to digital financial methods.",
  //     icon: Shield,
  //   },
  // ];

  // Enhanced commitment items with hover state
  const commitmentItems = [
    {
      title: "Security",
      description:
        "State-of-the-art security measures to protect user data and transactions",
      icon: Shield,
    },
    {
      title: "Accessibility",
      description:
        "User-friendly interface designed for traders and artisans of all technological backgrounds",
      icon: Globe,
    },
    {
      title: "Innovation",
      description:
        "Continuous improvement and feature development based on user feedback",
      icon: Zap,
    },
  ];

  // For hover effects on cards
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[100vw] overflow-hidden">
      {/* Replace the first section with PageBanner */}
      <div className="relative">
        <PageBanner
          title="About SabiSave"
          subtitle="Revolutionizing financial solutions for traders and artisans"
          backgroundImage={bannerImg}
        />
      </div>

      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <MotionAnimation>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 relative flex">
                What We Do
                <span className="ml-3 text-blueTwo">
                  <Info size={30} />
                </span>
                <MotionAnimation delay={0.5}>
                  <span className="absolute -bottom-2 left-0 w-[40%] h-1 bg-primary"></span>
                </MotionAnimation>
              </h2>
            </MotionAnimation>
            <MotionAnimation delay={0.3}>
              <p className="mb-6 text-lg md:text-4xl text-gray-700 leading-relaxed">
                We provide secure, accessible and user-friendly financial
                solutions that meet the unique needs of traders and artisans,
                while fostering economic growth and financial stability.
              </p>
            </MotionAnimation>
            <MotionAnimation delay={0.5}>
              <a
                href="#services"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:text-primary hover:bg-black transition-colors duration-300"
              >
                Our Services <ArrowRight size={16} className="ml-2" />
              </a>
            </MotionAnimation>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-red rounded-lg"></div>
              <MotionAnimation motion="slide-left">
                <img
                  src={img}
                  alt="SabiSave Team"
                  className="rounded-lg shadow-xl max-w-full h-auto relative z-10"
                  width={500}
                  height={375}
                />
              </MotionAnimation>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <Stats />

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ageGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${
                  hoveredIndex === index
                    ? "shadow-lg transform -translate-y-1"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {Icon && (
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {group.name}
                </h3>
                <p className="text-sm font-medium mb-4">{group.age}</p>
                <p>{group.description}</p>
              </div>
            );
          })}
        </div> */}

        <MotionAnimation delay={0.3} motion="slide-left">
          <div className="bg-gradient-to-r from-red/20 border border-gray-100 to-[#B9B4F166]/20 p-8 rounded-xl text-white shadow-lg flex flex-col md:flex-row lg:flex-row gap-8">
            <div className="flex-1">
              <MotionAnimation delay={0.3}>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Income Bracket
                </h3>
              </MotionAnimation>
              <MotionAnimation delay={0.5}>
                <p className="text-lg text-red ">
                  Our solution primarily serves traders and artisans with a
                  daily income of:
                </p>
              </MotionAnimation>
              <MotionAnimation delay={0.7}>
                <p className="text-3xl font-bold mt-2 text-black">
                  ₦1,000 – ₦10,000
                </p>
              </MotionAnimation>
            </div>
            <div className="flex-1 min-h-[250px] relative w-[100%] h-[500px] md:h-[300px] ">
              <img
                src={sabiMockHand}
                alt="mock image"
                className="absolute right-[-70px] bottom-[-40px]  md:right-[-103px] md:bottom-[-43px]"
              />
            </div>
          </div>
        </MotionAnimation>
      </Section>

      <ExecutiveTeam />

      <Section className="py-16 bg-primary text-black">
        <div className="text-center max-w-3xl mx-auto">
          <MotionAnimation motion="slide-down">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
          </MotionAnimation>
          <MotionAnimation delay={0.3} motion="slide-up">
            <p className="text-lg mb-8">
              Join thousands of traders and artisans who are already benefiting
              from our innovative financial solutions.
            </p>
          </MotionAnimation>
          <MotionAnimation delay={0.5} motion="slide-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className=" flex gap-2 justify-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                <Phone size={20} /> Contact Us
              </Link>
              <a
                href="#download"
                className=" flex gap-2 justify-center px-8 py-3 bg-black text-white rounded-lg font-medium hover:text-primary transition-colors duration-300"
              >
                <Download size={20} /> Download App
              </a>
            </div>
          </MotionAnimation>
        </div>
      </Section>

      <HowItWorks />

      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <MotionAnimation>
            <h2 className="text-3xl text-primary font-bold mb-6">
              Our Commitment
            </h2>
          </MotionAnimation>
          <MotionAnimation delay={0.3}>
            <p className="text-lg mb-8">
              At SabiSave, we are committed to providing financial solutions
              that are secure, accessible, and tailored to meet the unique needs
              of traders and artisans. Our team works tirelessly to ensure that
              our platform remains at the forefront of financial technology
              innovation.
            </p>
          </MotionAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {commitmentItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionAnimation delay={0.2 * index} motion="slide-up">
                  <div
                    key={index}
                    className="bg-dark/20 p-6 rounded-lg transition-all duration-300 hover:bg-dark/30"
                  >
                    {Icon && (
                      <div className="flex justify-center mb-4">
                        <Icon className="text-primary" size={28} />
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </MotionAnimation>
              );
            })}
          </div>
        </div>
      </Section>

      <Newsletter />
      <DownloadCTA />
    </div>
  );
}

export default About;
