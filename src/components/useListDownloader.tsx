import { useAppDispatch, useAppSelector } from "@/store/hooks";
import  { fetchGames } from "@/store/slices/gamesSlice";
import { useEffect } from "react";

export  function useDownloadList(){
      const { games } = useAppSelector( (state) => state.games);
    const dispatch = useAppDispatch();
      useEffect(() => {
        if (games.length === 0) {
          dispatch(fetchGames(1));
          dispatch(fetchGames(2));
          dispatch(fetchGames(3));
        }
      }, [dispatch,games.length]);
    
return {games}

}