import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ onPageChange, itemsCount, pageSize, curPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pageArr = [];
    for (let i = 1; i <= pageCount; i++) {
        pageArr.push(i);
    }
    if (curPage > pageArr.length && curPage > 1) {
        onPageChange(curPage - 1);
    }
    if (pageArr.length === 1) return null;
    return (
        <nav>
            <ul className="pagination">
                {pageArr.map((pageItem) => {
                    return (
                        <li
                            key={"page_" + pageItem}
                            className={
                                "page-item" +
                                (pageItem === curPage ? " active" : "")
                            }
                        >
                            <button
                                onClick={() => onPageChange(pageItem)}
                                className="page-link"
                            >
                                {pageItem}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    curPage: PropTypes.number.isRequired
};

export default Pagination;
