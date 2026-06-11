import Footer from "@/components/Footer";
import GameGrid from "@/components/GameGrid";
import Navbar from "@/components/Navbar";
import { games } from "@/data/games";

export default function Favorites() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-4 md:px-6 lg:px-8">
        <h1
          className="
            text-3xl
            font-black
            text-cyan-400
          "
        >
          Favorites
        </h1>
        <div className="bg-cyan-400 w-full h-1 mt-2"></div>
        <div className="mt-5 pb-5">
          <GameGrid games={games}/>
        </div>
      </main>
      <Footer />
    </>
  );
}