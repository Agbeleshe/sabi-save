import Button from "./Button";
import appStore from "../assets/appStore.png";
import playStore from "../assets/playStore.png";
import CircleAnimation from "../HOC/CircleAnimation";
import MotionAnimation from "../motion/MotionAnimation";

function DownloadCTA() {
  return (
    <section id="download" className="py-16 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <MotionAnimation>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-light">
                Get saving the <span className=" text-[#FFBD59]">SABI</span> way
                today!
              </h2>
              <CircleAnimation
                className="w-[100px] h-[120px] absolute top-[-40px] right-[15%] md:right-[41%]"
                delay={1500}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </MotionAnimation>
          <MotionAnimation delay={0.3} motion="slide-up">
            <p className="text-lg mb-8 text-light/80 max-w-2xl mx-auto">
              Download the SabiSave app today and experience seamless savings
              and access to micro-credit facilities.
            </p>
          </MotionAnimation>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MotionAnimation motion="slide-up">
              {" "}
              <div className="flex flex-wrap flex-col md:flex-row  gap-4 animated-border">
                <Button>
                  <div className="flex justify-start align-middle items-center  mx-auto md:min-w-[205px]">
                    <span>
                      <img
                        src={appStore}
                        height={40}
                        width={40}
                        alt="app store icon"
                      />
                    </span>
                    <p className="ml-2">Download for iOS</p>
                  </div>
                </Button>
                <Button>
                  <div className="flex justify-start align-middle items-center mx-auto md:min-w-[205px]">
                    <span>
                      <img
                        src={playStore}
                        height={40}
                        width={40}
                        alt="play store icon"
                      />
                    </span>
                    <p className="ml-2">Download for Android</p>
                  </div>
                </Button>
              </div>
            </MotionAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadCTA;
