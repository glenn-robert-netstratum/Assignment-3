import GameCard from "./GameCard";
import { games } from "@/data/games"
import { Swiper,SwiperSlide } from 'swiper/react';
import "swiper/css";

interface GameRowProps {
  title: string;
}

export default function GameRow({
  title,
}: GameRowProps) {
  return (
    <section
      className="
        py-2
        px-5
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        {title}
      </h2>

        <Swiper
        className='py-5!'
        spaceBetween={16}
        slidesPerView={6}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <GameCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}