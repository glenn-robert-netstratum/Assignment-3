import GameCard from "./GameCard";
import GameRowSkeleton from "../Skeletons/GameRowSkeleton";

interface GameRowProps {
  title: string;
  games: any[];
}

export default function GameRow({
  title,games
}: GameRowProps) {

  if (!games.length) {
    return (
      <GameRowSkeleton title={title}/>
    );
  }


  return (
    <section
      className="py-5 px-5"
    >
      <h2
        className=" text-2xl font-bold text-white"
      >
        {title}
      </h2>

      <div className="flex overflow-x-auto overflow-y-hidden scrollbar-none gap-4 py-5">
        {games.map((game) => (
          <div key={game.id} className="w-40 sm:w-50 md:w-60 lg:w-70 shrink-0 snap-start">
            <GameCard
              key={game.id}
              game={game}
            />
          </div>
      ))}
      </div>
    </section>
  );
}