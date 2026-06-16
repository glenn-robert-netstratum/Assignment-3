import { SearchBar } from "./Home/SearchBar";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const {
    loginWithRedirect,
    isAuthenticated,
    user,
  } = useAuth0();
  
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore",
      path: "/explore",
    },
    {
      name: "Favorites",
      path: "/favorites",
    },
  ];
  
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-cyan-400/20 bg-black/50 backdrop-blur-xl shadow-[0_0_30px] shadow-cyan-400/30">

      <div className=" mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-20 w-full gap-4">
        
        <h1 className="text-2xl lg:text-4xl font-bold text-cyan-400 shrink-0">
          GameVerse
        </h1>

        <div className="flex items-center gap-6 h-full">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `relative h-full flex items-center ${
                  isActive
                    ? "text-cyan-400 font-medium"
                    : "text-white/70 hover:text-cyan-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {route.name}
                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        w-full
                        bg-cyan-400
                        shadow-[0_0_12px_#22d3ee]
                      "
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            <div className="w-37 scale-75 md:scale-85 lg:scale-100 md:w-60 lg:w-100 ">
                <SearchBar />
            </div>
            <div className="flex items-center gap-2 lg:gap-4 shrink-0">
              {isAuthenticated ? (
                <button className="flex items-center gap-2"
                 onClick={() => navigate("/profile")}>
                  <img
                    src={user?.picture}
                    alt={user?.name}
                    className="h-10 w-10 rounded-full border-white"
                  />
                  <span className="hidden lg:block text-white " />
                </button>
              ) : (
                <button
                  onClick={() => loginWithRedirect(
                    {
                      authorizationParams:{
                        prompt :"select_account"
                      }
                    }
                  )}
                  className="hidden md:flex rounded-lg bg-cyan-400 hover:bg-cyan-300 transition-colors px-6 py-2 font-semibold text-black"
                >
                  Sign In
                </button>
              )}
            </div>
        </div>

      </div>
    </nav>
  );
}