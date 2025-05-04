import { useState } from "react";
import { ArrowRight, Wallet, Users, Globe } from "lucide-react";
import ThreeDmodal from "./threeDmodal";

export default function FinancialInclusionComponent() {
  const [activeTab, setActiveTab] = useState("trader");

  const tabs = [
    { id: "trader", title: "Trader", icon: <Wallet size={24} /> },
    { id: "agent", title: "Agent", icon: <Users size={24} /> },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="w-full container bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Left panel with content */}
          <div className="p-8 md:p-12 flex-1">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              How are we making a difference?
            </h1>

            <p className="text-gray-300 mb-8 text-lg">
              Our solution is truly local, driving financial inclusion and
              creating employment opportunities.
            </p>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? "bg-yellow-500 text-gray-900 font-medium"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-gray-700 p-6 rounded-xl">
              {activeTab === "trader" && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400">Trader</h2>
                  <p className="text-gray-200">
                    With ease, traders can conveniently save in a wallet,
                    transfer funds and manage their funds in real time.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 flex-1">
                      <Wallet className="text-yellow-400" />
                      <span>Digital Wallet</span>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 flex-1">
                      <ArrowRight className="text-yellow-400" />
                      <span>Real-time Transfers</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "agent" && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-yellow-400">Agent</h2>
                  <p className="text-gray-200">
                    Beyond saving, we are empowering individuals as agents, and
                    enhancing income growth.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 flex-1">
                      <Users className="text-yellow-400" />
                      <span>Network Building</span>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 flex-1">
                      <Globe className="text-yellow-400" />
                      <span>Community Impact</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right panel with image */}
          <div className=" w-full md:flex items-center justify-center md:w-1/3 p-6">
            <div className="text-center">
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <ThreeDmodal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
