import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface FilterBarProps {
  selectedPlatforms: string[];
  setSelectedPlatforms: (value: string[]) => void;

  selectedGenre: string[];
  setSelectedGenre: (value: string[]) => void;

  minimumMetacritic: number;
  setMinimumMetacritic: (value: number) => void;
}

const genres = [
  "Action",
  "RPG",
  "FPS",
  "Strategy",
  "Indie",
  "Adventure",
  "Shooter",
  "Casual",
  "Simulation"
];

const platforms = [
  "PC",
  "PlayStation",
  "Xbox",
];

export default function FilterSidebar({ selectedPlatforms, setSelectedPlatforms,selectedGenre,setSelectedGenre,minimumMetacritic,setMinimumMetacritic }: FilterBarProps) {
  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(
      selectedPlatforms.includes(platform)
        ? selectedPlatforms.filter((item) => item !== platform)
        : [...selectedPlatforms, platform]
    );
  };

  const toggleGenre=(genre: string) =>{
    setSelectedGenre(
      selectedGenre.includes(genre)
        ? selectedGenre.filter((item)=> item!=genre)
        : [...selectedGenre,genre]
    )
  }

  return (
    <aside className="rounded-r-xl border border-(--gameverse-primary)/20 bg-zinc-950/70 p-6 backdrop-blur-xl">
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold text-(--gameverse-primary)">Genre</h2>

        <div className="space-y-4">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center gap-3">
              <Checkbox
              checked={selectedGenre.includes(genre)}
              onCheckedChange={() => toggleGenre(genre)} />

              <label className="cursor-pointer text-white">
                {genre}
              </label>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold text-(--gameverse-primary)">Platform</h2>

        <div className="space-y-4">
          {platforms.map((platform) => (
            <div key={platform} className="flex items-center gap-3">
              <Checkbox 
                checked={selectedPlatforms.includes(platform)}
                onCheckedChange={() => togglePlatform(platform)}
              />

              <label className="cursor-pointer text-white">
                {platform}
              </label>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold text-(--gameverse-primary)">Rating</h2>

        <Slider
          defaultValue={[0]}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) =>
          setMinimumMetacritic(value[0])}
        />

        <div className="mt-3 flex justify-between text-sm text-gray-400">
          <span>0</span>
          <span>{minimumMetacritic}</span>
          <span>100</span>
        </div>
      </section>
    </aside>
  );
}