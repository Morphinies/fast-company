import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, curItem, chooseItem, resetCurItem }) => {
    return (
        <ul className="list-group me-5">
            {Object.values(items).map((item) => {
                return (
                    <li
                        role="button"
                        key={item._id}
                        className={
                            "list-group-item" +
                            (curItem === item ? " active" : "")
                        }
                        onClick={() => chooseItem(item)}
                    >
                        {item.name}
                    </li>
                );
            })}
            {curItem && (
                <li
                    role="button"
                    className="list-group-item"
                    onClick={() => resetCurItem()}
                >
                    сбросить фильтр
                </li>
            )}
        </ul>
    );
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    curItem: PropTypes.object,
    chooseItem: PropTypes.func.isRequired,
    resetCurItem: PropTypes.func.isRequired
};

export default GroupList;
