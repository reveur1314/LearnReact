import React from "react"
export default ({text,complete,onClick}) => {
    return <li onClick={onClick}>{text}</li>
};
