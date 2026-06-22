import { Tag } from "lucide-react";

interface GameGenresProps {
  genres: any[];
}

export default function GameGenres({
  genres,
}: GameGenresProps) {
  if (!genres.length) return null;

  return (
    <section>
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Tag className="w-5 h-5 text(--gameverse-primary)" />
        Genres
      </h2>

      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <span key={genre.id}
            className=" px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            {genre.name}
          </span>
        ))}
      </div>
    </section>
  );
}