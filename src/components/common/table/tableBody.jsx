import React from "react";
import _ from "lodash";
import user from "../../../images/user.png";
import groupLogo from "../../../images/groupLogo.png";

function renderCell(item, column) {
  if (column.content) return column.content;

  if (column.link1)
    return (
      <a className="a--primary" href="/">
        {_.get(item, column.path)}
      </a>
    );

  if (column.link2)
    return (
      <a className="a--secondary" href="/">
        {_.get(item, column.path)}
      </a>
    );

  return _.get(item, column.path);
}

function renderImage(column) {
  if (column.path === "owner")
    return <img className="table__body-icon" src={user} alt="..." />;
  else if (column.path === "name")
    return <img className="table__body-icon" src={groupLogo} alt="..." />;
}

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr className="table__row" key={item.id}>
          {columns.map((column, index) => (
            <td
              key={index}
              className={`table__cell${
                column.center ? " table__cell--center" : ""
              }`}
            >
              {renderImage(column)}
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
