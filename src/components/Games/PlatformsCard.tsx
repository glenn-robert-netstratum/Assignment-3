import { Monitor } from "lucide-react";

interface PlatformsCardProps {
  platforms: any[];
}

export default function PlatformsCard({
  platforms,
}: PlatformsCardProps) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-5">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Monitor className="w-5 h-5 text-(--gameverse-primary)" />
        Platforms
      </h2>

      <ul className="space-y-2">
        {platforms.map((platform) => (
          <li key={platform.platform.id}>
            {platform.platform.name}
          </li>
        ))}
      </ul>
    </section>
  );
}