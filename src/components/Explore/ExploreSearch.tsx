import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ExploreSearch() {
  return (
    <div className="mb-6 mt-5 mr-5">
      <div
        className="
          flex
          items-center
          border
          border-cyan-500/20
          bg-zinc-900/70
          px-4
          py-3
          backdrop-blur-xl
        "
      >
        <Search
          className="
            mr-3
            h-5
            w-5
            text-cyan-400
          "
        />

        <Input
          placeholder="Search games, genres, publishers..."
          className="
            border-none
            bg-transparent
            text-white
            shadow-none
            focus-visible:ring-0
            focus-visible:ring-offset-0
          "
        />
      </div>
    </div>
  );
}