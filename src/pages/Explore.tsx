import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/Explore/FilterSidebar";
import Footer from "@/components/Footer";
import ExploreSearch from "@/components/Explore/ExploreSearch";
import ActiveFilters from "@/components/Explore/ActiveFIlters";
import GameGrid from "@/components/GameGrid";
import { useAppDispatch,useAppSelector } from "@/store/hooks";
import { fetchGames } from "@/store/slices/gamesSlice";
import { useState,useEffect } from "react";
import ExplorePagination from "@/components/Explore/ExplorePagination";
import { useDownloadList } from "@/components/useListDownloader";

export default function Explore() {



  const {  games }  = useDownloadList()


  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedGenre,setSelectedGenre] = useState<string[]>([]);
  const [minimumMetacritic,setMinimumMetacritic] = useState(0);

  
  const filteredGames = games.filter((game) => {
    const matchesSearch=game.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatforms.length === 0 ||game.parent_platforms
      ?.some((platform: any) =>selectedPlatforms.includes(platform.platform.name));
    const matchesGenre = selectedGenre.length === 0 ||game.genres
      ?.some((genre: any) =>selectedGenre.includes(genre.name));
    const matchesMetacritic =
      (game.metacritic ?? 0) >= minimumMetacritic;
    return (matchesSearch && matchesPlatform && matchesGenre && matchesMetacritic)
    
  })



const activeFilters = [...selectedPlatforms,...selectedGenre];
const [currentPage, setCurrentPage] = useState(1);
const gamesPerPage = 20;
const currentGames = filteredGames.slice((currentPage - 1) * gamesPerPage,currentPage * gamesPerPage);
const totalPages = Math.ceil(filteredGames.length / gamesPerPage);




  return (
    <>
      <Navbar />
      <div className="pt-20 ">
        <div className="grid gap-6 grid-cols-[130px_1fr] md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] min-h-screen">
          <FilterSidebar 

           selectedPlatforms={selectedPlatforms}
            setSelectedPlatforms={setSelectedPlatforms} 
            selectedGenre={selectedGenre}
             setSelectedGenre={setSelectedGenre}
            minimumMetacritic={minimumMetacritic}
             setMinimumMetacritic={setMinimumMetacritic}
             
             
             />

          <main>
            <ExploreSearch search={searchTerm} setSearch={setSearchTerm}/>
            <ActiveFilters filters={activeFilters}/>
            <div className="mr-5">
              <GameGrid games={currentGames}/>
            </div>
            <ExplorePagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </main>
        </div>
      </div>
      <Footer/>
    </>
  );
}