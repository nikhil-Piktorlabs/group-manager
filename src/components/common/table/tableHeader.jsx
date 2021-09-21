import React from "react";
import sortIcon from "../../../images/sort.png";

function raiseSort(path, sortColumn, onSort) {
  const newSortColumn = sortColumn;
  if (newSortColumn.path === path)
    newSortColumn.order = newSortColumn.order === "asc" ? "desc" : "asc";
  else {
    newSortColumn.path = path;
    newSortColumn.order = "asc";
  }

  onSort({ ...newSortColumn });
}

function renderSortIcon(column, sortColumn) {
  const { path } = sortColumn;

  if (column.path !== path) return null;

  return <img className="table__heading-icon" src={sortIcon} alt="" />;
}

const TableHeader = ({ columns, sortColumn, onSort }) => {
  return (
    <thead className="table__heading">
      <tr className="table__row">
        {columns.map((column, index) => (
          <th
            key={index}
            onClick={() => {
              if (column.path) raiseSort(column.path, sortColumn, onSort);
            }}
            className={`table__cell table__cell--sort${
              column.center ? " table__cell--center" : ""
            }${column.checkbox ? " table__cell--small" : ""}`}
          >
            {column.label}
            {renderSortIcon(column, sortColumn)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
