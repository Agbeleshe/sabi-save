import { useState, useEffect } from "react";
import appStore from "../assets/appStore.png";
import playStore from "../assets/playStore.png";
import backgroundImage from "../assets/mama.png";
import backgroundImageMobile from "../assets/mamaMobilei.png";
import MotionAnimation from "../motion/MotionAnimation";

const Button: React.FC<
  {
    primary?: boolean;
    className?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, primary = true, className = "", ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 
      ${
        primary
          ? "bg-[#FFBD59] text-black hover:bg-black hover:text-[#FFBD59]"
          : "bg-black text-white hover:text-[#FFBD59]"
      } 
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Hero section component
export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the device is mobile
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Common breakpoint for mobile devices
  };

  // Add event listener for window resize and initial check
  useEffect(() => {
    // Initial check
    checkIsMobile();

    // Add event listener
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Background style with the appropriate image based on device
  const backgroundStyle = {
    backgroundImage: `url(${
      isMobile ? backgroundImageMobile : backgroundImage
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0" style={backgroundStyle}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={isMobile ? "px-2" : ""}>
            <MotionAnimation>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
                Let us <span className="text-[#FFBD59]">Save</span> <br />
                daily together.
              </h1>
            </MotionAnimation>
            <MotionAnimation delay={0.3}>
              <p className="text-lg md:text-xl mb-8 text-white max-w-lg">
                Sabi save is a digital platform that gives power to the trader
                to save daily, send money and manage their business at their
                convenience, and from their mobile phones for free
              </p>
            </MotionAnimation>
            <div className="flex flex-wrap gap-4 animated-border">
              <MotionAnimation motion="slide-up">
                <Button>
                  <div className="flex justify-start align-middle items-center w-[150px] md:min-w-[210px]">
                    <span>
                      <img
                        src={appStore}
                        height={40}
                        width={40}
                        alt="app store icon"
                      />
                    </span>
                    <p className="ml-2 hidden md:block">Download for iOS</p>
                    <p className="ml-2 md:hidden">iOS App</p>
                  </div>
                </Button>
              </MotionAnimation>
              <MotionAnimation delay={0.3} motion="slide-up">
                <Button primary={false}>
                  <div className="flex justify-start align-middle items-center w-[150px] md:min-w-[210px]">
                    <span>
                      <img
                        src={playStore}
                        height={40}
                        width={40}
                        alt="play store icon"
                      />
                    </span>
                    <p className="ml-2 hidden md:flex">Download for Android</p>
                    <p className="ml-2 md:hidden">Android App</p>
                  </div>
                </Button>
              </MotionAnimation>
            </div>
            <div className="container mt-6">
              <MotionAnimation delay={0.5} motion="slide-up">
                <p className="text-[10px] inline-block bg-black text-white p-2 rounded-[13px] font-thin md:text-[14px] cursor-pointer hover:bg-opacity-80 transition-all">
                  Today is a good day to start. So create a free account 😊👍
                </p>
              </MotionAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
