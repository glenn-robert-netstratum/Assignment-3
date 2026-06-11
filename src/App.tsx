import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Favorites from "./pages/Favorites";

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
            element={<Favorites />}
          />

          <Route
            path="/profile"
            element={<Profile/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;