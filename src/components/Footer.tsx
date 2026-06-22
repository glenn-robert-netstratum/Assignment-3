export default function Footer() {
  return (
    <footer className="border-t border-(--gameverse-primary)/20 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h2 className="text-3xl font-black text-(--gameverse-primary)">
              GameVerse
            </h2>

            <p className="mt-4 text-gray-400">
              Discover trending games, explore new worlds, and find your next adventure.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">
              Built With
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>RAWG API</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cyan-500/10 pt-6 text-center text-sm text-gray-500">
          © 2026 GameVerse. Built for gamers.
        </div>
      </div>
    </footer>
  );
}