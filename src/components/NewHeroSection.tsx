import mockPhone from "../assets/iphoneMock.svg";
import appStore from "../assets/appStore.svg";
import playStore from "../assets/playStore.svg";
import CircleAnimation from "../HOC/CircleAnimation";
import MotionAnimation from "../motion/MotionAnimation";

const NewHeroSection = () => {
  return (
    <div className="overflow-hidden  bg-gradient-to-br from-[#F7F7F766]/20 to-[#FDAD34]/20 min-h-screen w-full px-4 md:px-8 lg:px-16 py-12 md:py-20 items-center flex justify-center">
      <div className="container flex flex-col md:flex-row mx-auto pt-10 md:pt-0">
        {/* Left content - Text section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8 flex flex-col justify-center">
          <div className="text-4xl md:text-[53px] 2xl:text-[80px] font-bold text-black leading-tight mb-6">
            <MotionAnimation>
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold text-black mb-6 ">
                  Let us{" "}
                  <span className="text-primary relative">
                    Save{" "}
                    <CircleAnimation className="absolute h-[80px] md:h-[180px] w-[110px] md:w-[180px] top-[-40%] md:top-[-70%] right-[-20%] md:right-[-20%] 2xl:w-[200px] 2xl:right-[-10%] 2xl:top-[-50%]" />
                  </span>{" "}
                  <br />
                  and grow together
                </h1>
              </div>
            </MotionAnimation>
          </div>
          <MotionAnimation delay={0.3}>
            <p className="text-gray-600 text-base md:text-lg 2xl:text-[24px] mb-8 max-w-[600px] md:max-w-[500px] 2xl:max-w-[650px] leading-relaxed md:leading-[2rem] 2xl:leading-[2.5rem]">
              Sabi save is a digital platform that provides traders and artisans
              with an easy way to save daily and manage their business
              conveniently from their mobile phones for free.
            </p>
          </MotionAnimation>
          <MotionAnimation delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <p className="font-medium mb-2 w-full">Download app on:</p>
              <a
                href="#"
                className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors min-w-[150px]"
              >
                <img
                  src={appStore}
                  width={15}
                  height={15}
                  className="mx-2"
                  alt="appStore"
                />
                Appstore
              </a>
              <a
                href="#"
                className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors min-w-[150px]"
              >
                <img
                  src={playStore}
                  height={15}
                  width={15}
                  className="mx-2"
                  alt="playSore"
                />
                Google Play
              </a>
            </div>
          </MotionAnimation>
        </div>

        {/* Right content - Phone mockup */}
        <div className="w-full md:w-1/2 h-[320px] md:h-auto flex justify-center md:justify-end">
          <MotionAnimation delay={0.7} motion="slide-left">
            <div className="relative w-64 md:w-80 2xl:w-[auto] mx-auto  ">
              <img
                src={mockPhone}
                alt="mock phone"
                className="h-[500px]  2xl:h-[650px] "
              />
            </div>
          </MotionAnimation>
        </div>
      </div>
    </div>
  );
};

export default NewHeroSection;
