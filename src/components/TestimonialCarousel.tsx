import { useCallback, useEffect, useRef, useState } from "react";
import { Star, StarHalf } from "lucide-react";
import MotionAnimation from "../motion/MotionAnimation";
import butcher from "../assets/sabi/alhajiButcher.jpg";
import tailoer from "../assets/sabi/hajiyaTailor.jpg";
import salesWoman from "../assets/sabi/womanStanding.png";

export default function TestimonialCarousel() {
  const baseTestimonials = [
    {
      quote:
        "With Sabi, I have been able to save more. Thanks to the flexible daily saving plan",
      name: "Amina Ishaku",
      occupation: "Tailor",
      rating: 3,
      image: tailoer,
    },
    {
      quote:
        "My records are better organised, less hiccups. No need to write on cards since I started using Sabisave",
      name: "Ayo Kolawole",
      occupation: "Butcher",
      rating: 4.5,
      image: butcher,
    },
    {
      quote:
        "I receive instant transaction alert and I'm able to track my account balance every minute",
      name: "Mallam Ibrahim",
      occupation: "Tomato Seller",
      rating: 3.5,
      image: salesWoman,
    },
    // {
    //   quote: "Sabisave has transformed how I manage my business finances",
    //   name: "Bisi Adegoke",
    //   occupation: "Fashion Designer",
    //   rating: 5,
    //   image: "/images/testimonials/bisi.jpg",
    // },
    // {
    //   quote:
    //     "No more struggling with change or small savings, Sabi handles that easily",
    //   name: "Chidi Okoro",
    //   occupation: "Provision Store Owner",
    //   rating: 4,
    //   image: "/images/testimonials/chidi.jpg",
    // },
    // {
    //   quote:
    //     "I love how fast and easy it is to monitor my daily sales with Sabisave",
    //   name: "Grace Umeh",
    //   occupation: "Cosmetic Seller",
    //   rating: 5,
    //   image: "/images/testimonials/grace.jpg",
    // },
  ];

  const testimonials = [...baseTestimonials, ...baseTestimonials];

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const manualScrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isHovering = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const scrollSpeed = 1;
  const scrollDelay = 20;

  const startAutoScroll = useCallback(() => {
    if (scrollInterval.current || isMobile) return;
    scrollInterval.current = setInterval(() => {
      if (!scrollRef.current || isHovering.current) return;

      const container = scrollRef.current;
      container.scrollLeft += scrollSpeed;

      const totalScrollWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= totalScrollWidth) {
        container.scrollLeft = 0;
      }
    }, scrollDelay);
  }, [isMobile, scrollSpeed, scrollDelay]);

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    if (!isMobile) startAutoScroll();
    return () => stopAutoScroll();
  }, [isMobile, startAutoScroll]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth * 0.85;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(
      (scrollLeft % (cardWidth * baseTestimonials.length)) / cardWidth
    );

    setActiveIndex(index);
  };

  const handleMobileScrollPause = () => {
    if (!isMobile) return;
    stopAutoScroll();
    if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
    manualScrollTimeout.current = setTimeout(() => {
      startAutoScroll();
    }, 10000);
  };

  const goToSlide = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.clientWidth * 0.85;
    container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="text-blueTwo fill-primary" size={16} />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarHalf key={i} className="text-blueTwo fill-primary" size={16} />
        );
      } else {
        stars.push(<Star key={i} className="text-gray-300" size={16} />);
      }
    }

    return stars;
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
          <p className="text-gray-400 text-center mb-12">
            We asked our customers what they think about SabiSave
          </p>
        </MotionAnimation>

        <MotionAnimation>
          <div
            ref={scrollRef}
            onScroll={() => {
              handleScroll();
              handleMobileScrollPause();
            }}
            onMouseEnter={() => {
              isHovering.current = true;
            }}
            onMouseLeave={() => {
              isHovering.current = false;
            }}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
          >
            <div className="flex gap-6 snap-x snap-mandatory px-2 md:px-0">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] relative rounded-lg min-h-[250px] overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                    <p className="mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        {/* <p className="font-semibold">{testimonial.name}</p> */}
                        <p className="text-sm text-gray-300">
                          {testimonial.occupation}
                        </p>
                      </div>
                      <div className="ml-auto flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionAnimation>

        <div className="flex justify-center mt-8 gap-2">
          {baseTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-white scale-110" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
