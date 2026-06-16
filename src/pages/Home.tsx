import Navbar from "@/components/Navbar";
import Slider from "@/components/Home/Slider";
import GameRow from "@/components/Home/GameRow";
import TrendingSection from "@/components/Home/TrendingSection";
import Footer from "@/components/Footer";
import { useAppDispatch,useAppSelector, } from "@/store/hooks";
import { useEffect } from "react";
import { fetchGames } from "@/store/slices/gamesSlice";


export default function Home() {
  const dispatch = useAppDispatch();
  const { games } = useAppSelector( (state) => state.games);

  useEffect(() => {
    if (games.length === 0) {
      dispatch(fetchGames());
    }
  }, []);

  const { loading,error,} = useAppSelector((state) => state.games);
  console.log(games[0])
  console.log(loading)
  console.log(error)

  const topRatedGames = [...games].sort((a, b) => b.metacritic - a.metacritic).slice(0, 20);
  const trendingGames = [...games].sort((a, b) => b.suggestions_count - a.suggestions_count).slice(0, 4);
  const mostPopularGames =[...games].sort((a, b) => {
      const aPopularity =
        a.added_by_status.owned +
        a.added_by_status.beaten +
        a.added_by_status.playing;
      const bPopularity =
        b.added_by_status.owned +
        b.added_by_status.beaten +
        b.added_by_status.playing;
      return (
        bPopularity - aPopularity
      );
    }).slice(0, 20);

    const newestGames = [...games].sort(
      (a, b) =>
        new Date(b.released).getTime() -
        new Date(a.released).getTime()
    )
  .slice(0, 20);

  return (
    <>
      <Navbar />
      <Slider games={games} />
      <div className="-mt-75 relative z-20">
        <GameRow title="Top Rated" games={topRatedGames} />
        <GameRow title="Newest Games" games={newestGames} />
        <TrendingSection games={trendingGames}/>
        <GameRow title="Most Played" games={mostPopularGames}/>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}