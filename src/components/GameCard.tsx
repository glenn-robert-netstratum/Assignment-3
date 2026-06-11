import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface GameCardProps {
  game: {
    id: number;
    name: string;
    background_image: string;
    rating: number;
  };
}

export default function GameCard({
  game,
}: GameCardProps) {
  return (
    <Card
      className="
        relative
          h-30
          sm:h-50
          shrink-0
          overflow-hidden
          border-none
          cursor-pointer
          transition-all
          hover:-translate-y-3
          md:hover:-translate-y-5
      "
    >
      <img
        src={game.background_image}
        alt={game.name}
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          from-black/90
          via-black/40
          to-transparent
        "
      />

      <CardContent
        className="
          absolute
          bottom-0
          z-10
          w-full
          p-4
        "
      >
        <h3
          className="
            text-white
            font-bold
            truncate
          "
        >
          {game.name}
        </h3>

        <p className="text-cyan-400">
          ⭐ {game.rating}
        </p>
      </CardContent>
    </Card>
  );
}