import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UsersTable = ({ users, onSort, ...rest }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th
                        role="button"
                        onClick={() => onSort("name")}
                        scope="col"
                    >
                        имя
                    </th>
                    <th role="button" scope="col">
                        качества
                    </th>
                    <th
                        role="button"
                        onClick={() => onSort("profession.name")}
                        scope="col"
                    >
                        профессия
                    </th>
                    <th
                        role="button"
                        onClick={() => onSort("completedMeetings")}
                        scope="col"
                    >
                        встретился, раз
                    </th>
                    <th
                        role="button"
                        onClick={() => onSort("rate")}
                        scope="col"
                    >
                        оценка
                    </th>
                    <th
                        role="button"
                        onClick={() => onSort("bookmark")}
                        scope="col"
                    ></th>
                    <th role="button" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return <User {...user} key={user._id} {...rest} />;
                })}
            </tbody>
        </table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
};

export default UsersTable;
