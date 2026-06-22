import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Favorites from "./pages/Favorites";
import GameDetails from "./pages/GameDetails";
import ProtectedRoute from "./components/ProtectedRoutes";

import './App.css'
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/game/:id"
            element={<GameDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;