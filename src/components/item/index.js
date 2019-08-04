import React from "react";

export default function Item({name, surname, desc, id}) {
    return(
        <ul key={id} className="item">
            <li>
                <b>Name</b>: {name}
            </li>
            <li>
                <b>Surname</b>: {surname}
            </li>
            <li>
                <b>Description</b>: {desc}
            </li>
        </ul>
    )
}