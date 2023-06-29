import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ quantity }) => {
    return (
        <h1 className="badge bg-primary m-2">
            {quantity + " человек тусанут с тобой сегодня"}
        </h1>
    );
};

SearchStatus.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default SearchStatus;
