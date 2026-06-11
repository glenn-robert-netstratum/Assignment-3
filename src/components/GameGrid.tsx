import GameCard from "./Home/GameCard";

interface GameGridProps {
  games: any[];
}

export default function GameGrid({
  games,
}: GameGridProps) {
  return (
    <div
      className="
        grid
        gap-4
        mb-5

        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
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