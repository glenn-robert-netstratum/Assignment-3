import { useState,useEffect } from "react";

import HeroCard from "./HeroCard";
import "swiper/css";
import "swiper/css/pagination";

interface SliderProps{
  games: any[];
}

export default function Slider({games} : SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === games.length - 1 ? 0 : prev + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? games.length - 1 : prev - 1
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [games.length]);


  if (games.length === 0) {
  return <div>Loading...</div>;
}

  return (
    <div className="pt-20">
      <div className="h-220">
          <HeroCard game={games[currentIndex]} />
        </div>
    </div>
  );
}