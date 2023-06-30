import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (item === selectedSort.iter && selectedSort.order === "asc") {
            return onSort({ iter: item, order: "desc" });
        }
        onSort({ iter: item, order: "asc" });
        return null;
    };

    const addArray = (column) => {
        if (
            columns[column].iter &&
            columns[column].iter === selectedSort.iter
        ) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-up-fill"></i>;
            } else {
                return <i className="bi bi-caret-down-fill"></i>;
            }
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => {
                    return (
                        <>
                            <th
                                key={column}
                                onClick={
                                    columns[column].iter
                                        ? () => handleSort(columns[column].iter)
                                        : undefined
                                }
                                scope="col"
                                role={columns[column].iter && "button"}
                            >
                                {columns[column].name}
                                {addArray(column)}
                            </th>
                            {/* {columns[column].iter && columns[column].iter === selectedSort.iter &&  } */}
                            {/* {selectedSort.iter === columns[column].name && (
                                <i className="bi bi-caret-up-fill"></i>
                            )} */}
                            {/* {console.log(selectedSort.iter)}
                            {console.log(columns[column])} */}
                            {/* {selectedSort === columns[column] && (
                                <i className="bi bi-caret-up-fill"></i>
                            )} */}
                        </>
                    );
                })}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func,
    columns: PropTypes.object,
    selectedSort: PropTypes.object
};

export default TableHeader;
