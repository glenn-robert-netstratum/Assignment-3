import { useParams } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import GameHero from "@/components/Games/GameHero";
import GameGenres from "@/components/Games/GameGenre";
import GameScreenshots from "@/components/Games/GameScreenshots";
import GameTags from "@/components/Games/GameTags";
import Ratings from "@/components/Games/Ratings";
import PlatformsCard from "@/components/Games/PlatformsCard";
import StoresCard from "@/components/Games/StoreCard";

export default function GameDetails() {
  const { id } = useParams();

  const game = useAppSelector((state) =>
    state.games.games.find((game) =>game.id === Number(id)));

  if (!game) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center ">
        <p className="text-gray-400 text-lg">
          No game selected.
        </p>
      </div>
    );
  }

  const {
    genres = [],
    platforms = [],
    tags = [],
    stores = [],
    ratings = [],
    short_screenshots = [],
    name,
  } = game;

  return (
    <div className=" min-h-screen bg-(--gameverse-background)] text-white">
      <GameHero game={game} />
      <div className=" max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <GameGenres genres={genres} />
          <GameScreenshots screenshots={short_screenshots} gameName={name}/>
          <GameTags tags={tags} />
        </div>

        <div className="space-y-8">
          <Ratings ratings={ratings} />
          <PlatformsCard platforms={platforms} />
          <StoresCard stores={stores} />
        </div>
      </div>
    </div>
  );
}