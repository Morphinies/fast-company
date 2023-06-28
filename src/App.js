import api from "./api";
import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
    const initialUsers = api.users.fetchAll();
    const [users, setUsers] = useState(initialUsers);

    const delUser = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const changeStatus = (id) => {
        setUsers(
            users.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };

    return (
        <>
            <SearchStatus quantity={users.length} />
            <Users
                delUser={delUser}
                users={users}
                changeStatus={changeStatus}
            />
        </>
    );
};

export default App;
