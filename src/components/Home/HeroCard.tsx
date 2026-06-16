import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface HeroCardProps {
  game: {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    released: string;
  };
}

export default function HeroCard({
  game,
}: HeroCardProps) {
  return (
    <Card
      className="
        relative
        w-full
        h-full
        overflow-hidden
        border-none
        rounded-t-none
        z-0
        
      "
    >
      <img
        src={game.background_image}
        alt={game.name}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-top
          rounded-none!
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/60
        "
      />

      <CardContent
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-start
          pt-5
          px-6 sm:px-6 md:px-8 lg:px-12
        "
      >
        <p className="mb-2 text-cyan-400">
          ⭐ {game.rating}
        </p>

        <h1
          className="
            max-w-2xl
            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            font-bold
            text-white
          "
        >
          {game.name}
        </h1>

        <p className="mt-4 text-gray-300">
          Released: {game.released}
        </p>

        <button
          className="
            mt-6
            w-fit
            rounded-lg
            bg-cyan-400
            px-4 py-2
            md:px-4 md:py-2
            font-semibold
            text-black
          "
        >
          Explore Game
        </button>
      </CardContent>
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-black
          via-black/40
          to-transparent
        "
      />
    </Card>
  );
}