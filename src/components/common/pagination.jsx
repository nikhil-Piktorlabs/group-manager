import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="pagination">
      Showing {(currentPage - 1) * pageSize + 1} -{" "}
      {currentPage * pageSize > itemsCount
        ? itemsCount
        : currentPage * pageSize}
      <span className="vl" />
      <ul className="list list--inline">
        {pages.map((page) => (
          <li key={page} className="list__item">
            <span
              className={`pagination__btn${
                currentPage === page ? " pagination__btn--active" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
