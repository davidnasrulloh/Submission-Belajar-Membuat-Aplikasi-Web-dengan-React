import React from "react";

const CustomButton = ({id, onClick, title, className}) => {
    return(
        <button onClick={()=>onClick(id)} className={className}>{title}</button>
    )
}

export default CustomButton


