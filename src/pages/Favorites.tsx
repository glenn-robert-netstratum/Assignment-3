import Footer from "@/components/Footer";
import GameGrid from "@/components/GameGrid";
import Navbar from "@/components/Navbar";
import { useAppSelector } from "@/store/hooks";

export default function Favorites() {

  const favorites =useAppSelector((state) =>state.favorites.favorites);
  const games =useAppSelector((state) =>state.games.games);
  const favoriteGames = games.filter((game) => favorites.includes(game.id));
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 px-4 md:px-6 lg:px-8">
        <h1 className=" text-3xl font-black text-(--gameverse-primary)">
          Favorites
        </h1>
        <div className="bg-(--gameverse-primary) w-full h-1 mt-2"></div>
        <div className="mt-5 pb-5">
           {favoriteGames.length === 0 
           ? (<div className="mt-10 text-white flex justify-center items-center text-2xl"><h1>No Favorties</h1></div>)
           : (<GameGrid games={favoriteGames}/>)
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}