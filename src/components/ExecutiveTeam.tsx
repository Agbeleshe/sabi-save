import { Linkedin, Mail } from "lucide-react";
import CTO from "../assets/Team/manImg.jpg";
import CEO from "../assets/Team/womanImg.jpg";
import MotionAnimation from "../motion/MotionAnimation";

export default function ExecutiveTeam() {
  const executives = [
    {
      name: "Dawak Gomerep",
      title: "Chief Executive Officer (CEO)",
      image: CEO,
      linkedin:
        "https://www.linkedin.com/in/dawak-gomerep-712a19126?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "dawakgomerep@sabisave.com",
    },
    {
      name: "Tobi Ebenezer",
      title: "Chief Technology Officer (CTO)",
      image: CTO,
      linkedin:
        "https://www.linkedin.com/in/tobi-ebenezer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "tobiebenezer@sabisave.com",
    },
  ];

  return (
    <div className="w-full mx-auto py-12 px-4 max-w-[100vw] overflow-hidden">
      <MotionAnimation motion="slide-up">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Meet our Management Team
          </h2>
        </div>
      </MotionAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {executives.map((executive, index) => (
          <MotionAnimation delay={0.5 * index} motion="slide-left" key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6">
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
              <MotionAnimation delay={1} motion="slide-up">
                <p className="text-primary mb-4">{executive.title}</p>
              </MotionAnimation>
              <MotionAnimation delay={1.3} motion="slide-left">
                <div className="flex space-x-3 mt-2">
                  <a
                    href={executive.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition"
                    aria-label={`LinkedIn profile of ${executive.name}`}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${executive.email}`}
                    className="text-gray-600 hover:text-blue-500 transition"
                    aria-label={`Email ${executive.name}`}
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </MotionAnimation>
            </div>
          </MotionAnimation>
        ))}
      </div>
    </div>
  );
}
