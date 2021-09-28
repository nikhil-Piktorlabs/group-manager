import React, { useState } from "react";
import _ from "lodash";
import "./pagination.css";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const [goto, setGoto] = useState("");

  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  function handleGoto(target) {
    if (target.charCode === 13) {
      if (goto === "" || parseInt(goto) <= 0 || parseInt(goto) > pagesCount)
        return;
      onPageChange(parseInt(goto));
    }
  }

  return (
    <nav className="pagination pagination--absolute">
      Showing {(currentPage - 1) * pageSize + 1} -{" "}
      {currentPage * pageSize > itemsCount
        ? itemsCount
        : currentPage * pageSize}
      <span className="vl" />
      Goto{" "}
      <input
        className="input pagination__goto"
        value={goto}
        type="number"
        onKeyPress={handleGoto}
        onChange={(e) => setGoto(e.currentTarget.value)}
      />
      <span className="vl" />
      <ul className="list list--inline">
        {pages.map((page) => (
          <li
            key={page}
            className={`list__item pagination__btn${
              currentPage === page ? " pagination__btn--active" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
