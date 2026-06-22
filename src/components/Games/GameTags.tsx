interface GameTagsProps {
  tags: any[];
}

export default function GameTags({
  tags,
}: GameTagsProps) {
  if (!tags.length) return null;

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">
        Tags
      </h2>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="px-3 py-1 rounded-md bg-(--gameverse-primary)/10 text-(--gameverse-primary)"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  );
}