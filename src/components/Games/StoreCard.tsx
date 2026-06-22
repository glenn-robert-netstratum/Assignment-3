import { ShoppingCart } from "lucide-react";

interface StoresCardProps {
  stores: any[];
}

export default function StoresCard({
  stores,
}: StoresCardProps) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-5">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <ShoppingCart className="w-5 h-5 text-(--gameverse-primary)" />
        Available On
      </h2>

      <ul className="space-y-2">
        {stores.map((store) => (
          <li key={store.id}>
            {store.store.name}
          </li>
        ))}
      </ul>
    </section>
  );
}