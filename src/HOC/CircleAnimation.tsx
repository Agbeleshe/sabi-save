import React, { useEffect, useState, CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import loadingCircle from "../assets/lottie/circle.json";

interface CircleAnimationProps {
  className?: string;
  style?: CSSProperties;
  delay?: number;
  [key: string]: unknown; // allows passing additional props to <Lottie />
}

const CircleAnimation: React.FC<CircleAnimationProps> = ({
  className = "",
  style = {},
  delay = 1000,
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (inView) {
      timeout = setTimeout(() => {
        setShouldPlay(true);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [inView, delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {shouldPlay && (
        <Lottie
          animationData={loadingCircle}
          loop={!inView}
          autoplay
          style={{ width: "100%", height: "100%", ...style }}
          {...rest}
        />
      )}
    </div>
  );
};

export default CircleAnimation;
