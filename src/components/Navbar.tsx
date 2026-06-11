import { SearchBar } from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-cyan-400/20 bg-black/50 backdrop-blur-xl shadow-[0_0_30px] shadow-cyan-400/30">

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-20 w-full gap-4">
        
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
            <button className="hidden md:flex rounded-lg bg-cyan-400 hover:bg-cyan-300 transition-colors px-6 py-2 font-semibold text-black">
                Sign In
            </button>
        </div>

      </div>
    </nav>
  );
}