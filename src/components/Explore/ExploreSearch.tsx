import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ExploreSearchProps{ 
  search: string
  setSearch: (value: string) => void;
}

export default function ExploreSearch({search,setSearch} : ExploreSearchProps) {
  return (
    <div className="mb-6 mt-5 mr-5">
      <div className="flex items-center border border-(--gameverse-primary)/20 bg-zinc-900/70 px-4 py-3 backdrop-blur-xl">
        <Search className="mr-3 h-5 w-5 text-(--gameverse-primary)" />

        <Input
          autoFocus
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.trim())}
          placeholder="Search games"
          className="border-none bg-transparent text-white shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
    </div>
  );
}