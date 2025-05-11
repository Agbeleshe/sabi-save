import { useState } from "react";
import { Star, StarHalf } from "lucide-react";
import MotionAnimation from "../motion/MotionAnimation";

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "With Sabi, I have been able to save more. Thanks to the flexible daily saving plan",
      name: "Amina Emeka",
      occupation: "Tomato Trader",
      rating: 3,
    },
    {
      quote:
        "My records are better organised, less hiccups. No need to write on cards since I started using Sabisave",
      name: "Aliyu Kolawole",
      occupation: "Agent",
      rating: 4.5,
    },
    {
      quote:
        "I receive instant transaction alert and I'm able to track my account balance every minute",
      name: "Mallam Ibrahim",
      occupation: "Yam Seller",
      rating: 3.5,
    },
    // Adding a fourth testimonial to match the four dots in the original
    {
      quote: "Sabisave has transformed how I manage my business finances",
      name: "Bisi Adegoke",
      occupation: "Fashion Designer",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="text-yellow-400 fill-primary" size={16} />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarHalf
            key={i}
            className="text-yellow-400 fill-primary"
            size={16}
          />
        );
      } else {
        stars.push(<Star key={i} className="text-gray-300" size={16} />);
      }
    }

    return stars;
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-black py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <MotionAnimation delay={0.2} motion="slide-up">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-6">
            See what our customers are saying
          </h2>
        </MotionAnimation>
        <MotionAnimation delay={0.3} motion="slide-up">
          {" "}
          <p className="text-gray-400 text-center mb-12">
            We asked our customers, what they think about SabiSave
          </p>
        </MotionAnimation>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials
            .slice(activeIndex, activeIndex + 3)
            .map((testimonial, index) => (
              <MotionAnimation delay={0.2 * index} motion="slide-up">
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 w-full max-w-xs shadow-lg min-h-[200px]"
                >
                  <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center overflow-hidden">
                      <span className="text-white text-lg font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    <div className="ml-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.occupation}
                      </p>
                    </div>

                    <div className="ml-auto flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </MotionAnimation>
            ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
