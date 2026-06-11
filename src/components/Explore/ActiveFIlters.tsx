import { X } from "lucide-react";

const filters = [
  "Action",
  "RPG",
  "PC",
  "Rating 80+",
];

export default function ActiveFilters() {
  return (
    <div className="mb-6 flex flex-wrap gap-3 mr-5">
      {filters.map((filter) => (
        <div
          key={filter}
          className="
            flex
            items-center
            gap-2

            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/10

            px-4
            py-2

            text-sm
            text-cyan-300
          "
        >
          {filter}

          <button>
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}