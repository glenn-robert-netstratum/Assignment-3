import { Card, CardContent } from "@/components/ui/card";

export default function GameCardSkeleton() {
  return (
    <Card className="relative w-48 sm:w-64 h-30 sm:h-50 shrink-0 overflow-hidden border-none animate-pulse">
      <div className="absolute inset-0 bg-zinc-800" />

      <CardContent className="absolute bottom-0 z-10 w-full p-4">
        <div className="h-5 w-3/4 rounded bg-zinc-700" />
        <div className="mt-2 h-4 w-16 rounded bg-zinc-700" />
      </CardContent>
    </Card>
  );
}