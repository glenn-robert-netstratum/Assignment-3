import {createSlice,createAsyncThunk,} from "@reduxjs/toolkit";

interface GamesState {games: any[];loading: boolean;error: string | null;}
const initialState: GamesState = { games: [],loading: false,error: null,};

export const fetchGames =
  createAsyncThunk(
    "games/fetchGames",
    async () => {
      const response = await fetch( `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`);
      const data =await response.json();
      return data.results;
    }
  );

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(
        fetchGames.pending,
        (state) => { state.loading = true; }
      )

      .addCase(
        fetchGames.fulfilled,
        (state, action) => {
          state.loading = false;
          state.games = action.payload;
        }
      )

      .addCase(
        fetchGames.rejected,
        (state) => {
          state.loading = false;
          state.error = "Failed to fetch games";
        }
      );
  },
});

export default gamesSlice.reducer;