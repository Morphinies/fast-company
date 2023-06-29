import api from "./api";
import React, { useEffect, useState } from "react";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.default.fetchAll().then((data) => setUsers(data));
    }, []);

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
            {users && (
                <Users
                    delUser={delUser}
                    users={users}
                    changeStatus={changeStatus}
                />
            )}
        </>
    );
};

export default App;
