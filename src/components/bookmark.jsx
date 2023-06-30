import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ changeStatus, bookmark }) => {
    return (
        <button onClick={changeStatus} className="btn">
            <i
                className={
                    bookmark
                        ? "bi bi-bookmark-heart-fill h4"
                        : "bi bi-bookmark-heart h4"
                }
            ></i>
        </button>
    );
};

Bookmark.propTypes = {
    changeStatus: PropTypes.func,
    bookmark: PropTypes.bool,
    _id: PropTypes.string
};

export default Bookmark;
