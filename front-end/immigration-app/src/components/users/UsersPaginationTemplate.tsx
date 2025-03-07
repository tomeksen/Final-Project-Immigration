"use client";
type PaginationListType = {
  currentPage: number;
  totalPage: number;
  queryKey: string;
};

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { createQueryString } from "@/utils/query";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FC } from "react";
const PaginationTemplate: FC<PaginationListType> = ({
  currentPage,
  totalPage,
  queryKey,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    router.push(
      pathname + "?" + createQueryString(searchParams, queryKey, String(page))
    );
  };
  return (
    <Pagination>
      <PaginationContent>
        {/* previous page */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
        )}
        {/* page 1 */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => handlePageChange(1)}
              isActive={currentPage === 1}
            >
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {/* show ellipsis if there are more than 3 pages and the current page is greater than 3 */}
        {currentPage > 3 && totalPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* previous page number */}
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(currentPage - 1)}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* current page */}
        <PaginationItem>
          <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>

        {/* next page number */}
        {currentPage < totalPage - 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* show ellipsis if there are more than 3 pages and the current page is far from the last page */}
        {currentPage < totalPage - 2 && totalPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* final page */}
        {totalPage > 1 && currentPage < totalPage && (
          <PaginationItem>
            <PaginationLink
              onClick={() => handlePageChange(totalPage)}
              isActive={currentPage === totalPage}
            >
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* next page */}
        {currentPage < totalPage && (
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationTemplate;
