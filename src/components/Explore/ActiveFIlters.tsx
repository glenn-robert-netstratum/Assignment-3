interface ActiveFIltersProps{
  filters: string[];
}

export default function ActiveFilters({filters}:ActiveFIltersProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-3 mr-5">
      {filters.map((filter) => (
        <div
          key={filter}
          className="flex items-center gap-2 rounded-full border border-(--gameverse-primary)/20 bg-(--gameverse-primary)/10 px-4 py-2 text-sm text-(--gameverse-primary-hover)">
          {filter}
        </div>
      ))}
    </div>
  );
}