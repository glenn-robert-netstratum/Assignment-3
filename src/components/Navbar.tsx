import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../assets/Gameverse.png";
import { Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./Home/dropdown";

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated,user,} = useAuth0();
  const {theme,setTheme, } = useTheme();
  const { t } = useTranslation();
  
  const routes = [
    {
      name: t("home"),
      path: "/",
    },
    {
      name: t("explore"),
      path: "/explore",
    },


    ...(isAuthenticated
    ? [
        {
          name: "Favorites",
          path: "/favorites",
        },
      ]: []),
  ];
  
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-(--gameverse-primary)/20 bg-black/50 backdrop-blur-xl shadow-[0_0_30px] shadow-(--gameverse-primary)/30">

      <div className=" mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-20 w-full gap-4">

        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-15 w-15 pb-2"/>
        
        
          <h1 className="text-2xl lg:text-4xl font-bold text-(--gameverse-primary) shrink-0">
            GameVerse
          </h1>
        </div>

        <div className=" flex items-center gap-6 h-full lg:pr-50">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `relative h-full flex items-center ${
                  isActive
                    ? "text-(--gameverse-primary) font-medium"
                    : "text-white/70 hover:text-(--gameverse-primary-hover)"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {route.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-(--gameverse-primary) shadow-[0_0_12px_#22d3ee]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5 lg:gap-8 shrink-0">
          <div>
            <LanguageDropdown/>
          </div>

          <div className="text-(--gameverse-primary) cursor-pointer">
            <Moon onClick={() => setTheme(theme === "cyber" ? "matrix" : "cyber")}/>
          </div>
            <div className="text-(--gameverse-primary) cursor-pointer"
            onClick={() =>navigate("/explore")}>
                <Search className=" w-7 h-7"/>
            </div>
            <div className="flex items-center gap-2 lg:gap-4 shrink-0">
              {isAuthenticated ? (
                <button className="flex items-center gap-2 cursor-pointer"
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
                  className="hidden md:flex rounded-lg bg-(--gameverse-primary) hover:bg-(--gameverse-primary-hover) transition-colors px-6 py-2 font-semibold text-black cursor-pointer"
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