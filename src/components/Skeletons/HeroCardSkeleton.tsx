import { Card, CardContent } from "@/components/ui/card";

export default function HeroCardSkeleton() {
  return (
    <Card className="relative w-full h-full overflow-hidden border-none rounded-t-none animate-pulse">
      <div className="absolute inset-0 bg-zinc-800" />

      <div className="absolute inset-0 bg-black/40" />

      <CardContent className="relative z-10 flex h-full flex-col justify-start pt-5 px-6 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-2 h-5 w-16 rounded bg-zinc-700" />

        <div className="h-10 w-3/4 rounded bg-zinc-700" />

        <div className="mt-4 h-5 w-40 rounded bg-zinc-700" />

        <div className="mt-6 h-10 w-32 rounded-lg bg-zinc-700" />
      </CardContent>

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
    </Card>
  );
}