import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";

const UsersTable = ({
    users,
    selectedSort,
    onSort,
    changeStatus,
    delUser,
    ...rest
}) => {
    const columns = {
        name: { iter: "name", name: "имя" },
        qualities: { name: "качества" },
        profession: { iter: "profession.name", name: "профессия" },
        completedMeetings: {
            iter: "completedMeetings",
            name: "встретился, раз"
        },
        rate: { iter: "rate", name: "оценка" },
        bookmark: {
            iter: "bookmark",
            name: "избранное",
            component: (user) => (
                <Bookmark
                    changeStatus={() => changeStatus(user._id)}
                    bookmark={user.bookmark}
                />
            )
        },
        delete: {
            name: "",
            component: (user) => (
                <button
                    onClick={() => delUser(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };

    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody data={users} columns={columns} {...rest} />
        </table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    changeStatus: PropTypes.func,
    delUser: PropTypes.func
};

export default UsersTable;
