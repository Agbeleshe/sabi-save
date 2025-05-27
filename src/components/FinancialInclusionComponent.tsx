import { Wallet, Users, Globe, HandCoins } from "lucide-react";
import ThreeDmodal from "./ThreeDmodal";
import MotionAnimation from "../motion/MotionAnimation";
import kekeMan from "../assets/sabi/newAiKekeMan.jpg";

export default function FinancialInclusionComponent() {
  // const [activeTab, setActiveTab] = useState("trader");

  // const tabs = [
  //   { id: "trader", title: "Trader", icon: <Wallet size={24} /> },
  //   { id: "agent", title: "Agent", icon: <Users size={24} /> },
  // ];

  return (
    <div className="bg-black text-white h-auto md:max-h-[600px] flex items-center justify-center p-4">
      <div className="w-full container  rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Left panel with content */}
          <div className="p-8 md:p-12 flex-1">
            <MotionAnimation motion="slide-down">
              <h1 className="text-2xl  md:text-4xl font-bold mb-2 bg-primary bg-clip-text text-transparent">
                How we are making a difference
              </h1>
            </MotionAnimation>

            <MotionAnimation delay={0.3} motion="slide-right">
              <p className="text-gray-300 mb-8 text-lg ">
                Our solution is truly local, driving financial inclusion and
                creating employment opportunities.
              </p>
            </MotionAnimation>

            <MotionAnimation motion="slide-left">
              <div className="md:hidden max-h-[300px] overflow-hidden rounded-md my-5">
                <img src={kekeMan} alt="Keke man" />
              </div>
            </MotionAnimation>

            {/* Tabs */}
            {/* <MotionAnimation>
              <div className="flex space-x-4 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-primary text-gray-900 font-medium"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.title}
                  </button>
                ))}
              </div>
            </MotionAnimation> */}

            {/* Tab content */}
            <MotionAnimation motion="slide-down">
              <div className="bg-blueTwo  p-6 rounded-xl flex flex-col md:flex-row gap-10 md:gap-5">
                <div className="space-y-4 flex-1">
                  <MotionAnimation delay={0.3}>
                    <h2 className="text-2xl font-bold text-primary">
                      Traders and Artisans
                    </h2>
                  </MotionAnimation>
                  <MotionAnimation delay={0.5} motion="slide-up">
                    <p className="text-white min-h-[100px]">
                      With ease, traders and artisans can conveniently save in a
                      wallet, transfer funds and manage their finances.
                    </p>
                  </MotionAnimation>
                  <div className="flex flex-col  flex-wrap gap-4 mt-4">
                    <MotionAnimation delay={0.5} motion="slide-down">
                      <div className="bg-black p-4 rounded-lg flex items-center space-x-3 flex-1">
                        <Wallet className="text-primary" />
                        <span>Digital Wallet</span>
                      </div>
                    </MotionAnimation>
                    <MotionAnimation delay={0.7} motion="slide-down">
                      <div className="bg-black p-4 rounded-lg flex items-center space-x-3 flex-1">
                        <HandCoins className="text-primary" />
                        <span>Real-time Transfers</span>
                      </div>
                    </MotionAnimation>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <MotionAnimation delay={0.3} motion="slide-left">
                    <h2 className="text-2xl font-bold text-primary">
                      Agent Partners{" "}
                    </h2>
                  </MotionAnimation>

                  <MotionAnimation delay={0.5} motion="slide-up">
                    <p className="text-white min-h-[100px]">
                      Beyond saving, we are empowering individuals as agents,
                      and enhancing income growth.
                    </p>
                  </MotionAnimation>
                  <div className="flex flex-col flex-wrap gap-4 mt-4">
                    <MotionAnimation delay={0.5} motion="slide-down">
                      <div className="bg-black p-4 rounded-lg flex items-center space-x-3 flex-1">
                        <Users className="text-primary" />
                        <span>Network Building</span>
                      </div>
                    </MotionAnimation>
                    <MotionAnimation delay={0.7} motion="slide-down">
                      <div className="bg-black p-4 rounded-lg flex items-center space-x-3 flex-1">
                        <Globe className="text-primary" />
                        <span>Community Impact</span>
                      </div>
                    </MotionAnimation>
                  </div>
                </div>
              </div>
            </MotionAnimation>
          </div>

          {/* Right panel with image */}
          <div className="hidden w-full md:flex items-center justify-center md:w-1/3 p-6">
            <div className="text-center">
              <MotionAnimation motion="slide-up">
                <div className="w-full h-64  rounded-lg flex items-center justify-center">
                  <ThreeDmodal />
                </div>
              </MotionAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
