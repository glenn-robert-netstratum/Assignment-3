import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2">
      <Search className="mr-2 h-4 w-4 text-gray-400" />

      <Input
        placeholder="Search games..."
        className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}