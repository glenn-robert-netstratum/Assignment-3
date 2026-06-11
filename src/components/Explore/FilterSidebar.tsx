import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const genres = [
  "Action",
  "RPG",
  "FPS",
  "Strategy",
  "Indie",
];

const platforms = [
  "PC",
  "PS5",
  "Xbox Series X",
];

export default function FilterSidebar() {
  return (
    <aside
      className="
        rounded-r-xl
        border
        border-cyan-500/20
        bg-zinc-950/70
        p-6
        backdrop-blur-xl
      "
    >

      <section className="mb-10">
        <h2
          className="
            mb-4
            text-lg
            font-bold
            text-cyan-400
          "
        >
          Genre
        </h2>

        <div className="space-y-4">
          {genres.map((genre) => (
            <div
              key={genre}
              className="flex items-center gap-3"
            >
              <Checkbox />

              <label
                className="
                  cursor-pointer
                  text-white
                "
              >
                {genre}
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* Platform */}
      <section className="mb-10">
        <h2
          className="
            mb-4
            text-lg
            font-bold
            text-cyan-400
          "
        >
          Platform
        </h2>

        <div className="space-y-4">
          {platforms.map((platform) => (
            <div
              key={platform}
              className="flex items-center gap-3"
            >
              <Checkbox />

              <label
                className="
                  cursor-pointer
                  text-white
                "
              >
                {platform}
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* Rating */}
      <section>
        <h2
          className="
            mb-4
            text-lg
            font-bold
            text-cyan-400
          "
        >
          Rating
        </h2>

        <Slider
          defaultValue={[80]}
          min={0}
          max={100}
          step={1}
        />

        <div
          className="
            mt-3
            flex
            justify-between
            text-sm
            text-gray-400
          "
        >
          <span>0</span>
          <span>100</span>
        </div>
      </section>
    </aside>
  );
}