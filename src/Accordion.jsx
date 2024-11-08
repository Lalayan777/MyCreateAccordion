import { useState } from "react";
import "./App.css"



function Accordion({ accordion, onDelete }) {
    const [isTrue, setIsTrue] = useState(false)
    const handleClick = ()=>{
        setIsTrue(!isTrue)
        console.log(isTrue)
    }
    return(
        <div className="cont">
        <div onClick={handleClick}>{accordion.title} {isTrue ? "-" : "+" } <button onClick={() => onDelete(accordion.id)} className='delete'>Delete</button> </div>
        <p style={{display : !isTrue ? "none" : "block" }}>{accordion.description}</p>
    </div>
    )
}

export default Accordion;