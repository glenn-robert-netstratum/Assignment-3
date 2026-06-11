import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/Explore/FilterSidebar";
import Footer from "@/components/Footer";
import ExploreSearch from "@/components/Explore/ExploreSearch";
import ActiveFilters from "@/components/Explore/ActiveFIlters";
import GameGrid from "@/components/GameGrid";
import { games } from "@/data/games";

export default function Explore() {
  return (
    <>
      <Navbar />

      <div className="pt-20 ">
        <div
          className="
            grid
            gap-6
            grid-cols-[130px_1fr]
            md:grid-cols-[240px_1fr]
            lg:grid-cols-[280px_1fr]
            min-h-screen
          "
        >
          <FilterSidebar />

          <main>
            <ExploreSearch/>
            <ActiveFilters/>
            <div className="mr-5">
              <GameGrid games={games}/>
            </div>
          </main>
        </div>
      </div>
      <Footer/>
    </>
  );
}