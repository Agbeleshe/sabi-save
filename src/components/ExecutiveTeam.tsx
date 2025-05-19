import { Linkedin, Mail } from "lucide-react";
import CTO from "../assets/Team/CTO.jpg";
import CEO from "../assets/Team/CEO.jpg";
import MotionAnimation from "../motion/MotionAnimation";

export default function ExecutiveTeam() {
  const executives = [
    {
      name: "Dawak Gomerep",
      title: "Chief Executive Officer (CEO)",
      image: CEO,
    },
    {
      name: "Tobi Awodumila",
      title: "Chief Technology Officer (CTO)",
      image: CTO,
    },
  ];

  return (
    <div className="w-full mx-auto py-12 px-4 max-w-[100vw] overflow-hidden">
      <MotionAnimation motion="slide-up">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Our Leadership</h2>
        </div>
      </MotionAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {executives.map((executive, index) => (
          <MotionAnimation delay={0.5 * index} motion="slide-left">
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6"
            >
              <MotionAnimation delay={0.5} motion="slide-down">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                  <img
                    src={executive.image}
                    alt={`${executive.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </MotionAnimation>

              <MotionAnimation delay={0.8} motion="slide-up">
                <h3 className="text-xl font-bold text-gray-800">
                  {executive.name}
                </h3>
              </MotionAnimation>
              <MotionAnimation delay={1} motion="slite-up">
                <p className="text-primary mb-4">{executive.title}</p>
              </MotionAnimation>
              <MotionAnimation delay={1.3} motion="slide-left">
                <div className="flex space-x-3 mt-2">
                  <button className="text-gray-600 hover:text-blue-500 transition">
                    <Linkedin size={20} />
                  </button>
                  <button className="text-gray-600 hover:text-blue-500 transition">
                    <Mail size={20} />
                  </button>
                </div>
              </MotionAnimation>
            </div>
          </MotionAnimation>
        ))}
      </div>
    </div>
  );
}
