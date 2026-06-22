import {Star,Calendar,Clock,} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavorite, removeFavorite,} from "@/store/slices/favoritesSlice";

interface GameHeroProps {
  game: any;
}

export default function GameHero({ game, }: GameHeroProps) {

  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.includes(game.id);
  const handleFavorite = () => {
  if (isFavorite) {
    dispatch(removeFavorite(game.id));
  } else {
    dispatch(addFavorite(game.id));
  }};
  return (
    <section className="relative w-full h-[80vh] min-h-105">
      <img
        src={game.background_image}
        alt={game.name}
        className=" absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/20" />

      <div className=" relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-end px-6 pb-10">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />

          <span className="text-(--gameverse-primary) font-semibold text-lg">
            {game.rating?.toFixed(2)}
          </span>

          <span className="text-gray-400 text-sm">
            ({game.ratings_count.toLocaleString()} ratings)
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          {game.name}
        </h1>

        <div className="flex items-center gap-5 text-gray-300 text-sm mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            Released: {game.released}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {game.playtime} hrs average playtime
          </span>
        </div>

        <button className=" w-fit bg-(--gameverse-primary) text-black px-6 py-3 rounded-lg font-semibold cursor-pointer"
         onClick={handleFavorite}>
          {isFavorite
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>
      </div>
    </section>
  );
}