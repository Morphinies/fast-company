import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        } else {
            return _.get(item, columns[column].iter);
        }
    };

    return (
        <tbody>
            {data.map((item) => {
                return (
                    <tr key={item._id}>
                        {Object.keys(columns).map((column) => {
                            return (
                                <td key={column}>
                                    {renderContent(item, column)}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object
};

export default TableBody;
