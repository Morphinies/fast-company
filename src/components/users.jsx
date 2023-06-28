import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const Users = ({ delUser, users, changeStatus }) => {
    const count = users.length;
    const pageSize = 4;
    const [curPage, setCurPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurPage(pageIndex);
    };

    const userCrop = paginate(users, curPage, pageSize);

    return (
        <>
            {count && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">имя</th>
                            <th scope="col">качества</th>
                            <th scope="col">профессия</th>
                            <th scope="col">встретился, раз</th>
                            <th scope="col">оценка</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => {
                            return (
                                <User
                                    {...user}
                                    key={user._id}
                                    delUser={delUser}
                                    changeStatus={changeStatus}
                                />
                            );
                        })}
                    </tbody>
                </table>
            )}
            <Pagination
                curPage={curPage}
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Users;
