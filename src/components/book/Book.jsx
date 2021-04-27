import React from "react";
import './style.css'

function book(props) {
    console.log("Book props ", props);
    return (
        <div className="lists">
            <span className="items">{props.name}</span>
            <span className="items">{props.desc}</span>
            <span className="items">{props.count}</span>
            <span className="items">{props.author}</span>
        </div>
    )
}

export default book;