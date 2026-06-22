import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useAppDispatch,useAppSelector } from "@/store/hooks";
import { removeFavorite,addFavorite } from "@/store/slices/favoritesSlice";

interface GameCardProps {
  game: {
    id: number;
    name: string;
    background_image: string;
    rating: number;
  };
}

export default function GameCard({ game }: GameCardProps) {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) =>state.favorites.favorites);
  const isFavorite = favorites.includes(game.id);
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavorite(game.id));
    } else {
      dispatch(addFavorite(game.id));
    }
  };

  return (
    <Card className="relative w-full h-30 sm:h-50 shrink-0 overflow-hidden border-none cursor-pointer transition-all hover:-translate-y-3"
    onClick={() => navigate(`/game/${game.id}`)}>
      <img
        src={game.background_image}
        alt={game.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

      <CardContent className="absolute bottom-0 z-20 w-full p-4">
        <h3 className="text-white font-bold truncate">
          {game.name}
        </h3>

        <p className="text-(--gameverse-primary)">
          ⭐ {game.rating}
        </p>

        <button aria-label="Add to favorites"
          className="absolute right-2 bottom-2 text-(--gameverse-primary) p-3 rounded-lg">
          <Heart className={`w-4 h-4 hover:scale-120 cursor-pointer ${isFavorite ? "fill-(--gameverse-primary)" : "fill-transparent"}`}
          onClick={toggleFavorite} />
        </button>
      </CardContent>
    </Card>
  );
}