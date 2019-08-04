import React from "react";

export default function Pagination({number, handleClick, selected}) {
    return(
        <li
            className={selected ? 'selected' : ''}
            id={number}
            onClick={handleClick}
        >
            {number}
        </li>
    )
}