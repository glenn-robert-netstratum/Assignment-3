import { Trophy } from "lucide-react";

interface RatingsProps {
  ratings: any[];
}

export default function Ratings({
  ratings,
}: RatingsProps) {
  const ratingBreakdown =
    [...ratings].sort(
      (a, b) =>
        b.percent - a.percent
    );

  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-5">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Trophy className="w-5 h-5 text-(--gameverse-primary)" />
        Rating Breakdown
      </h2>

      <div className="space-y-3">
        {ratingBreakdown.map(
          (rating) => (
            <div key={rating.id}>
              <div className="flex justify-between text-sm mb-1">
                <span>
                  {rating.title}
                </span>

                <span>
                  {rating.percent}%
                </span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full">
                <div
                  className=" h-full bg-(--gameverse-primary) rounded-full "
                  style={{ width: `${rating.percent}%`, }}
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}