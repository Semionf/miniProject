import React from "react";

export const LineInTable = ({ Name, Price, Stock }) => {
  return (
    <div>
      <tr>
        <td>{Name}</td>
        <td>{Price}$</td>
        <td>{Stock}</td>
      </tr>
    </div>
  );
};
