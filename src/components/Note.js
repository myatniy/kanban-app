import React from "react";

export default ({value, onDelete}) => (
    <li>
        <span>{value}</span>
        <button onClick={onDelete}>x</button>
    </li>
);