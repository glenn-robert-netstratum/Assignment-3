import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination  } from "swiper/modules";

import { games } from "@/data/games";
import HeroCard from "./HeroCard";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="pt-20">
        <Swiper
        className="h-[40vh] md:h-[50vh] lg:h-[60vh] mb-5"
          modules={[Autoplay,Pagination]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          loop
        >
        {games.map((game) => (
            <SwiperSlide key={game.id}>
            <HeroCard game={game}/>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
}