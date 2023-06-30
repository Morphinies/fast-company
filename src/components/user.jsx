import React from "react";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    rate,
    delUser,
    bookmark,
    qualities,
    profession,
    changeStatus,
    completedMeetings
}) => {
    return (
        <tr key={_id}>
            <th scope="row">{name}</th>
            <td>
                <Qualitie qualities={qualities} />
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td></td>
            <td>
                <button onClick={() => delUser(_id)} className="btn btn-danger">
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    delUser: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    changeStatus: PropTypes.func.isRequired,
    completedMeetings: PropTypes.number.isRequired
};

export default User;
