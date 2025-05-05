import { ArrowRight } from "lucide-react";
//import marketWoman from "../assets/MarketWoman.jpg";
//import longImgOne from "../assets/longImg.jpg";
import longImgTwo from "../assets/longImggTwo.jpg";
import mockPhone from "../assets/phone.png";
import marketWomanTwo from "../assets/marketWomanTwo.jpg";
import MotionAnimation from "../motion/MotionAnimation";

// Define interface for FeaturesCardOne props
interface FeaturesCardOneProps {
  header: string;
  description: string;
  tag: string;
  img: string;
  link: string;
}

// Define interface for FeaturesCardTwo props
interface FeaturesCardTwoProps {
  header: string;
  description: string;
  tag: string;
  img: string;
  link: string;
  bgColor?: string;
  textColor?: string;
}

const FeaturesCardOne = ({
  header,
  description,
  tag,
  img,
  link,
}: FeaturesCardOneProps) => {
  return (
    <div className="w-full mt-5 md:h-[500px] bg-gradient-to-br hover:scale-[1.02] transition-all ease-in-out duration-1000 cursor-pointer from-yellow-50 to-white flex flex-col md:flex-row overflow-hidden rounded-3xl md:rounded-[20px] border border-primary">
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
        <div>
          <div>
            <MotionAnimation motion="slide-right">
              <p className="text-xl inline-block bg-black text-white p-2 rounded-[10px] font-extrabold md:text-2xl mb-4 md:mb-10">
                {tag}
              </p>
            </MotionAnimation>
          </div>
          <MotionAnimation delay={0.3} motion="slide-right">
            <h1 className="text-3xl md:text-4xl text-primary font-bold my-2 md:my-3">
              {header}
            </h1>
            <p className="text-base md:text-md my-2 md:my-3">{description}</p>
          </MotionAnimation>
        </div>
        <MotionAnimation delay={0.5} motion="slide-right">
          <a href={"#download"}>
            <div className="mt-8 md:mt-0 mb-6 md:mb-0 flex gap-3 items-center justify-center md:justify-start cursor-pointer">
              {link} <ArrowRight size={20} />
            </div>
          </a>
        </MotionAnimation>
      </div>
      <div className="cursor-pointer overflow-hidden w-full md:w-1/2 h-64 md:h-auto">
        <MotionAnimation motion="slide-left">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            src={img}
            alt={header}
          />
        </MotionAnimation>
      </div>
    </div>
  );
};

const FeaturesCardTwo = ({
  header,
  description,
  tag,
  img,
  link,
  bgColor = "bg-primary",
  textColor = "text-black",
}: FeaturesCardTwoProps) => {
  return (
    <div className="w-full  border border-gray-600 md:w-[60%] bg-gradient-to-br from-gray-200 to-white rounded-[20px] h-auto md:h-[600px] p-6 md:p-10 overflow-hidden cursor-pointer hover:scale-[1.02] transition-all ease-in-out duration-1000 flex flex-col">
      <div className="flex flex-col h-full">
        <div>
          <MotionAnimation motion="slide-down">
            <p
              className={`text-lg md:text-xl inline-block ${bgColor} ${textColor} p-2 rounded-[10px] font-extrabold mb-4 md:mb-6`}
            >
              {tag}
            </p>
          </MotionAnimation>
          <MotionAnimation delay={0.3} motion="slide-down">
            <h1 className="text-2xl md:text-4xl font-bold my-2 md:my-3">
              {header}
            </h1>
          </MotionAnimation>
          <MotionAnimation delay={0.5} motion="slide-down">
            <p className="text-sm md:text-base my-2 md:my-3 max-w-[90%]">
              {description}
            </p>
          </MotionAnimation>
          <MotionAnimation>
            <a href="#download">
              {" "}
              <div className="mt-4 md:mt-8 flex gap-3 items-center justify-center md:justify-start cursor-pointer">
                <p>{link}</p> <ArrowRight size={20} />
              </div>
            </a>
          </MotionAnimation>
        </div>

        <div className="mt-6 md:mt-auto flex justify-center ">
          <MotionAnimation delay={0.5} motion="slide-up">
            <img
              src={img}
              alt={`${header} image`}
              className="w-2/3 md:w-full max-h-64 md:max-h-96 object-contain"
            />
          </MotionAnimation>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  // Sample data for the FeaturesCardOne component
  // const featureOneData = {
  //   header: "Get our mobile application now",
  //   description:
  //     "Our mobile application is designed to provide traders with a user-friendly mobile app allows traders to manage their savings on the go, with real-time balance updates and transaction history.",
  //   tag: "Mobile Application",
  //   img: marketWoman,
  //   link: "Get it now",
  // };

  // Sample data for the FeaturesCardTwo component
  // const featureTwoData = {
  //   header: "Easy Registration of traders",
  //   description:
  //     "Easy and secure registration process for traders with minimal documentation required to get started.",
  //   tag: "Trader Registration",
  //   img: mockPhone,
  //   link: "Get it now",
  //   bgColor: "bg-primary",
  //   textColor: "text-black",
  // };

  // Sample data for the FeaturesCardOne component
  const featureThreeData = {
    header: "Your money is safe",
    description: "Registration is easy, seamless and fast.",
    img: marketWomanTwo,
    tag: "Digital Wallet",
    link: "Get it now",
  };

  // Sample data for the FeaturesCardTwo component
  const featureFourData = {
    header: "Easy to use dahsboard",
    description:
      "A robust dashboard for the registration of traders, and for agents to monitor and manage trader accounts",
    tag: "Agent Account",
    img: mockPhone,
    link: "Get it now",
    bgColor: "bg-primary",
    textColor: "text-black",
  };

  //Removed data

  // <>
  //   <FeaturesCardOne
  //     header={featureOneData.header}
  //     description={featureOneData.description}
  //     tag={featureOneData.tag}
  //     img={featureOneData.img}
  //     link={featureOneData.link}
  //   />

  //   <div className="flex flex-col w-full gap-5 md:flex-row mt-5">
  //     {/* Left column - Image */}
  //     <div className="w-full hidden md:flex md:w-[40%] bg-red-500 rounded-[20px] h-80 md:h-[600px] overflow-hidden cursor-pointer hover:scale-[1.02] transition-all ease-in-out duration-1000">
  //       <img
  //         src={longImgOne}
  //         className="w-full h-full object-cover"
  //         alt="Feature image"
  //       />
  //     </div>

  //     {/* Right column - Using FeaturesCardTwo */}
  //     <FeaturesCardTwo
  //       header={featureTwoData.header}
  //       description={featureTwoData.description}
  //       tag={featureTwoData.tag}
  //       img={featureTwoData.img}
  //       link={featureTwoData.link}
  //       bgColor={featureTwoData.bgColor}
  //       textColor={featureTwoData.textColor}
  //     />
  //   </div>
  // </>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-[1500px] p-4 md:p-10 mx-auto">
      {/* Removed data */}

      <FeaturesCardOne
        header={featureThreeData.header}
        description={featureThreeData.description}
        tag={featureThreeData.tag}
        img={featureThreeData.img}
        link={featureThreeData.link}
      />

      <div className="flex flex-col w-full gap-5 md:flex-row mt-5">
        {/* Left column - Image */}
        <div className="w-full hidden md:flex md:w-[40%] rounded-[20px] h-80 md:h-[600px] overflow-hidden cursor-pointer hover:scale-[1.02] transition-all ease-in-out duration-1000">
          <MotionAnimation>
            <img
              src={longImgTwo}
              className="w-full h-full object-cover"
              alt="Feature image"
            />
          </MotionAnimation>
        </div>

        {/* Right column - Using FeaturesCardTwo */}
        <FeaturesCardTwo
          header={featureFourData.header}
          description={featureFourData.description}
          tag={featureFourData.tag}
          img={featureFourData.img}
          link={featureFourData.link}
          bgColor={featureFourData.bgColor}
          textColor={featureFourData.textColor}
        />
      </div>
    </div>
  );
};

export default Features;
