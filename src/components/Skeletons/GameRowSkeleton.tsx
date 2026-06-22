import GameCardSkeleton from "../Skeletons/GameCardSkeleton";

interface GameRowSkeletonProps{
    title : String
}

export default function GameRowSkeleton({title}: GameRowSkeletonProps)
{
  return(
    <section className=" py-5 px-5">
      <h2 className=" text-2xl font-bold text-white"
      > {title} </h2>
         <div className="flex gap-4 overflow-hidden">
           {Array.from({ length: 6 }).map((_, index) => (
              <GameCardSkeleton key={index} />
          ))}
         </div>
     </section>
  )
}