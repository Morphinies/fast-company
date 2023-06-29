import PropTypes from "prop-types";
import Pagination from "./pagination";
import React, { useEffect, useState } from "react";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import API from "../api";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = ({ users, ...rest }) => {
    const [professions, setProfessions] = useState({});
    const [curProf, setCurProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const pageSize = 4;
    const [curPage, setCurPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        return setCurPage(pageIndex);
    };

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const filteredUsers = curProf
        ? users.filter((user) => user.profession._id === curProf._id)
        : users;
    const count = filteredUsers.length;
    const sortedUser = _.orderBy(filteredUsers, sortBy.iter, sortBy.order);
    const userCrop = paginate(sortedUser, curPage, pageSize);

    useEffect(() => {
        const pageCount = Math.ceil(count / pageSize);
        if (curPage > 1 && curPage > pageCount) {
            setCurPage(pageCount);
        }
    }, [curPage, count]);

    const changeCurProf = (prof) => {
        setCurProf(prof);
        setCurPage(1);
    };

    const resetCurProf = () => {
        setCurProf(undefined);
        setCurPage(1);
    };

    const handleSort = (item) => {
        if (item === sortBy.iter && sortBy.order === "asc") {
            return setSortBy({ iter: item, order: "desc" });
        }
        setSortBy({ iter: item, order: "asc" });
        return null;
    };

    return (
        <>
            <SearchStatus quantity={count} />

            <div className="d-flex mt-5">
                {professions && (
                    <GroupList
                        curItem={curProf}
                        items={professions}
                        chooseItem={changeCurProf}
                        resetCurItem={resetCurProf}
                    />
                )}
                {!!count && (
                    <div className="d-flex flex-column">
                        <UsersTable
                            users={userCrop}
                            onSort={handleSort}
                            {...rest}
                        />

                        <Pagination
                            curPage={curPage}
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
