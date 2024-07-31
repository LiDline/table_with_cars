import React from "react";
import ReactPaginate from "react-paginate";

import { useCarsTableContext } from "./useCarsTableContext";

export default function Pagination() {
  const { countCars, setOffset, limit } = useCarsTableContext();

  const items = Array.from(Array(countCars).keys());

  const pageCount = Math.ceil(items.length / limit);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % items.length;

    setOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="join"
        pageClassName="join-item btn"
        previousLinkClassName="join-item btn"
        nextLinkClassName="join-item btn"
        breakClassName="join-item btn"
        breakLinkClassName="join-item btn"
        activeClassName="join-item btn btn-active"
      />
    </>
  );

  return;
}
