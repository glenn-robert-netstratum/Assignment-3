interface TrendingSectionProps {
  games: any[];
}

export default function TrendingSection({
  games,
}: TrendingSectionProps) {
  const featuredGame = games[0];
  const sideGames = games.slice(1, 4);

  if (!games.length) return null;

  return (
    <section className="w-full px-4 md:px-7 py-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Trending Games
        </h2>

        <button className="text-cyan-400 hover:text-cyan-300">
          View All
        </button>
      </div>

      <div
        className="
          grid
          gap-3
          md:gap-4
          lg:gap-5
          grid-cols-1
          lg:grid-cols-[2fr_1fr]
          lg:grid-rows-3
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            border
            border-cyan-500/20
            bg-zinc-900
            min-h-75
            md:min-h-112.5
            lg:min-h-162.5
            lg:row-span-3
          "
        >
          <img
            src={featuredGame.background_image}
            alt={featuredGame.name}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 p-4 md:p-6 lg:p-8">
            <span
              className="
                rounded-full
                bg-cyan-500/20
                px-3
                py-1
                text-xs
                font-semibold
                text-cyan-300
              "
            >
              #1 TRENDING
            </span>

            <h3
              className="
                mt-3
                text-2xl
                md:text-4xl
                lg:text-5xl
                font-black
                text-white
              "
            >
              {featuredGame.name}
            </h3>

            <p
              className="
                mt-2
                text-sm
                md:text-base
                text-gray-300
              "
            >
              ⭐ {featuredGame.rating} • Metacritic{" "}
              {featuredGame.metacritic}
            </p>

            <button
              className="
                mt-4
                rounded-lg
                bg-cyan-400
                px-4
                py-2
                md:px-5
                md:py-3
                text-sm
                font-bold
                text-black
              "
            >
              Explore
            </button>
          </div>
        </div>

        {sideGames.map((game, index) => (
          <div
            key={game.id}
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              md:rounded-2xl
              border
              border-cyan-500/20
              bg-zinc-900
              min-h-35
              md:min-h-45
            "
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
                object-top
              "
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 p-3 md:p-4">
              <p className="text-cyan-400 font-bold text-sm md:text-lg">
                #{index + 2}
              </p>

              <h4 className="text-white font-bold text-sm md:text-lg line-clamp-2">
                {game.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}