interface GameScreenshotsProps {
  screenshots: any[];
  gameName: string;
}

export default function GameScreenshots({
  screenshots,
  gameName,
}: GameScreenshotsProps) {
  const filteredScreenshots =
    screenshots.filter(
      (s) => s.id !== -1
    );

  if (!filteredScreenshots.length)
    return null;

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">
        Screenshots
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filteredScreenshots.map((screenshot) => (
            <img
              key={screenshot.id}
              src={screenshot.image}
              alt={`${gameName} screenshot`}
              className=" rounded-lg object-cover border border-white/10"
            />
          )
        )}
      </div>
    </section>
  );
}