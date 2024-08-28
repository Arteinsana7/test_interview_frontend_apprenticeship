import React from "react";
import "../name-list.css";

const ListRendering = ({ names }) => {
  return (
    <ul>
      {/* Map over the names array and create a list item for each name */}
      {names.map((name, index) => (
        <li key={index}>{name}</li> // Each list item must have a unique 'key' prop
      ))}
    </ul>
  );
};

export default ListRendering;
