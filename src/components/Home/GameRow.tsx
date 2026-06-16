import GameCard from "./GameCard";
import "swiper/css";

interface GameRowProps {
  title: string;
  games: any[];
}

export default function GameRow({
  title,games
}: GameRowProps) {
  return (
    <section
      className="
        py-5
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

      <div className="flex overflow-x-auto overflow-y-hidden scrollbar-none gap-4 py-5">
        {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
        />
      ))}
      </div>
    </section>
  );
}