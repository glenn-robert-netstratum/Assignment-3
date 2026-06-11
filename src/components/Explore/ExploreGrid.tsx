import GameCard from "../Home/GameCard";
import { games } from "@/data/games";

export default function ExploreGrid() {
  return (
    <div
      className="
        grid
        gap-4
        mr-5
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        mb-5
      "
    >
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
        />
      ))}
    </div>
  );
}