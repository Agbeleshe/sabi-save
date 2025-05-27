import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import lottieDownload from "../assets/lottie/whatsApp.json";
import MotionAnimation from "../motion/MotionAnimation";

function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrollingTimeout, setIsScrollingTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolled more than 100px
      setShowButton(window.scrollY > 100);
      // Set scrolling state to true when user is scrolling
      setIsScrolling(true);

      // Clear the previous timeout if any
      if (isScrollingTimeout) {
        clearTimeout(isScrollingTimeout);
      }

      // Set a timeout to change opacity back to solid after the scrolling stops (500ms after last scroll event)
      setIsScrollingTimeout(
        setTimeout(() => {
          setIsScrolling(false); // Stop showing the transparent effect
        }, 200) // Adjust the time to how long you want after stopping the scroll
      );
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollingTimeout]);

  const handleClick = () => {
    setShowModal(true); // Show the modal when the button is clicked
  };

  const handleRedirect = () => {
    const phoneNumber = "2348136593992"; // Replace with your actual WhatsApp number
    const message = "Hello! I'm interested in your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setShowModal(false); // Close the modal after redirection
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal if the user clicks "No"
  };

  if (!showButton) return null;

  return (
    <div>
      <div
        className={`fixed bottom-0 left-0 z-50 ${
          !isScrolling ? "opacity-50" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <MotionAnimation motion="slide-up" duration={2}>
          <div
            onClick={handleClick}
            className="cursor-pointer transform hover:scale-110 transition-transform duration-200 drop-shadow-lg"
          >
            <Lottie
              animationData={lottieDownload}
              loop
              autoplay
              style={{ width: "80px", height: "80px" }}
            />
          </div>
        </MotionAnimation>
      </div>

      {/* Modal Popover */}
      {showModal && (
        <div className="fixed bottom-20 left-0 right-0 z-50 flex justify-center">
          <MotionAnimation motion="fadeInUp" duration={0.3}>
            <div
              className="bg-white p-6 rounded-lg shadow-xl w-80 text-center transform transition-all duration-300"
              style={{
                transition: "transform 0.3s ease-in-out",
                opacity: showModal ? 1 : 0,
              }}
            >
              <p className="text-lg mb-4">
                Do you want to be redirected to WhatsApp?
              </p>
              <div className="flex justify-around">
                <button
                  onClick={handleRedirect}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Yes
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-red-500 text-white bg-black rounded-lg hover:bg-red-600 transition"
                >
                  No
                </button>
              </div>
            </div>
          </MotionAnimation>
        </div>
      )}
    </div>
  );
}

export default WhatsAppButton;
