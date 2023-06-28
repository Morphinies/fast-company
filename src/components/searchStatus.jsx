import React from "react";

const SearchStatus = ({ quantity }) => {
  return (
    <h1 className="badge bg-primary m-2">
      {quantity + " человек тусанут с тобой сегодня"}
    </h1>
  );
};

export default SearchStatus;
