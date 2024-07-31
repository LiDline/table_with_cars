import React from "react";
import ReactPaginate from "react-paginate";

import { useCarsTableContext } from "./useCarsTableContext";

export default function Pagination() {
  const { countCars, setOffset, limit } = useCarsTableContext();

  const items = Array.from(Array(countCars).keys());

  const pageCount = Math.ceil(items.length / limit);

  const handlePageClick = (event: unknown) => {
    const newOffset = (event.selected * limit) % items.length;

    setOffset(newOffset);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="join"
        pageLinkClassName="join-item btn"
        previousLinkClassName="join-item btn"
        nextLinkClassName="join-item btn"
        breakLinkClassName="join-item btn"
        activeLinkClassName="join-item btn btn-active"
        disabledClassName="btn-disabled"
      />
    </div>
  );
}
