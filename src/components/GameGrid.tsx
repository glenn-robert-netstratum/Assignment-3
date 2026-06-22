import GameCard from "./Home/GameCard";

interface GameGridProps {
  games: any[];
}

export default function GameGrid({ games }: GameGridProps) {

  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center w-full">
        <h2 className="text-2xl font-bold text-white mb-2">No Results Found</h2>
      </div>
    );
  }

  return (
    <div className="grid gap-4 mb-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}