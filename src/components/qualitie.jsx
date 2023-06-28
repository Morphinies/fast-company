import React from "react";

const Qualitie = ({ qualities }) => {
    return qualities.map((qual) => {
        return (
            <span key={qual._id} className={`badge bg-${qual.color} m-2`}>
                {qual.name}
            </span>
        );
    });
};

export default Qualitie;
