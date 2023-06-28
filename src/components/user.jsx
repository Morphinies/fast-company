import React from "react";
import Qualitie from "./qualitie";

const User = ({
  _id,
  name,
  rate,
  delUser,
  bookmark,
  qualities,
  profession,
  changeStatus,
  completedMeetings,
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
      <td>
        <button onClick={() => changeStatus(_id)} className="btn">
          <i
            className={
              bookmark
                ? "bi bi-bookmark-heart-fill h4"
                : "bi bi-bookmark-heart h4"
            }
          ></i>
        </button>
      </td>
      <td>
        <button onClick={() => delUser(_id)} className="btn btn-danger">
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
