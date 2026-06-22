import {Pagination,PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious,} from "@/components/ui/pagination";

interface ExplorePaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function ExplorePagination({currentPage,totalPages,setCurrentPage,}: ExplorePaginationProps) {

  return (
    <Pagination className="mt-10 mb-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();

              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
            className="border mr-1 border-(--gameverse-primary)/20 bg-zinc-900 text-white hover:bg-(--gameverse-primary)/10 hover:text-(--gameverse-primary)"
          />
        </PaginationItem>

        {Array.from({ length: totalPages },(_, index) => index + 1).map((page) => (
          <PaginationItem key={page} className="mx-2">
            <PaginationLink
              isActive={currentPage === page}
              onClick={(e) => {e.preventDefault();
                setCurrentPage(page);
              }}
              className={`border transition-all
                ${currentPage === page
                    ? `border-(--gameverse-primary) bg-(--gameverse-primary) text-black shadow-[0_0_12px_var(--gameverse-primary)]`
                    : `border(--gameverse-primary)/20 bg-zinc-900 text-white hover:bg-(--gameverse-primary)/10 hover:text-(--gameverse-primary)`
                }
              `}
            >{page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={(e) => { e.preventDefault();
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
            className="border ml-1 border-(--gameverse-primary)/20 bg-zinc-900 text-white hover:bg-(--gameverse-primary)/10 hover:text-(--gameverse-primary)"
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}