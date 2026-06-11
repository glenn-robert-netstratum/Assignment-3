import Navbar from "@/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, logout, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="pt-28 text-center text-white">
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          pt-20
          w-full
          flex
          justify-center
        "
      >
        <div
          className="
            w-full
            bg-zinc-900/70
            backdrop-blur-xl
            p-8
            text-center
          "
        >
          <img
            src={user?.picture}
            alt={user?.name}
            className="
              mx-auto
              h-32
              w-32
              rounded-full
              border-4
              border-cyan-400
              object-cover
            "
          />

          <h1
            className="
              mt-6
              text-3xl
              font-bold
              text-white
            "
          >
            {user?.name}
          </h1>

          <p
            className="
              mt-2
              text-gray-400
            "
          >
            {user?.email}
          </p>

          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
            className="
              mt-8
              rounded-lg
              bg-red-500
              hover:bg-red-600
              py-3
              px-8
              font-semibold
              text-white
              transition-colors
            "
          >
            Logout
          </button>
        </div>
      </main>
    </>
  );
}