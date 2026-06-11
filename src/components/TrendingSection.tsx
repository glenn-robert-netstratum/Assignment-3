export default function TrendingSection() {
  return (
    <section className="w-full px-7 py-5">
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
          grid-cols-[2fr_1fr]
          grid-rows-3
          gap-3
          md:gap-4
          lg:gap-5
          lg:h-150
          lg:w-370
        "
      >
        {/* Featured Card */}
        <div
          className="
            relative
            row-span-3
            overflow-hidden
            rounded-xl
            border
            border-cyan-500/20
            bg-zinc-900
            aspect-auto
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
          "
        >

          <div
            className="
              absolute
              bottom-0
              p-3
              md:p-5
              lg:p-8
            "
          >
            <span
              className="
                rounded-full
                bg-cyan-500/20
                px-2 py-1
                md:px-3 md:py-1
                text-[10px]
                md:text-xs
                font-semibold
                text-cyan-300
              "
            >
              #1 TRENDING
            </span>

            <h3
              className="
                mt-2
                text-lg
                sm:text-2xl
                md:text-4xl
                lg:text-5xl
                font-black
                text-white
              "
            >
              Featured Game
            </h3>

            <p
              className="
                mt-2
                hidden
                md:block
                max-w-lg
                text-sm
                lg:text-base
                text-gray-300
              "
            >
              Your featured game description goes here.
            </p>

            <button
              className="
                mt-4
                rounded-lg
                bg-cyan-400
                px-3 py-2
                md:px-5 md:py-3
                text-xs
                md:text-sm
                font-bold
                text-black
              "
            >
              Explore
            </button>
          </div>
        </div>


        <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-cyan-500/20 bg-zinc-900">
          <div className="absolute bottom-0 p-2 md:p-4">
            <p className="text-cyan-400 font-bold text-sm md:text-lg">
              #2
            </p>

            <h4 className="text-white font-bold text-xs md:text-lg">
              Game Title
            </h4>
          </div>
        </div>

        {/* Card #3 */}
        <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-cyan-500/20 bg-zinc-900">

          <div className="absolute bottom-0 p-2 md:p-4">
            <p className="text-cyan-400 font-bold text-sm md:text-lg">
              #3
            </p>

            <h4 className="text-white font-bold text-xs md:text-lg">
              Game Title
            </h4>
          </div>
        </div>

        {/* Card #4 */}
        <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-cyan-500/20 bg-zinc-900">

          <div className="absolute bottom-0 p-2 md:p-4">
            <p className="text-cyan-400 font-bold text-sm md:text-lg">
              #4
            </p>

            <h4 className="text-white font-bold text-xs md:text-lg">
              Game Title
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}