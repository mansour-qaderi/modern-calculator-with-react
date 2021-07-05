import React from 'react'


const ShowText = (props) =>{
    console.log("porps" , props)
    return(
        <>
            <div style={{ color : props.color }} className="calculator__output calculator__output--history">{props.storedValue}</div>
            <div style={{ color : props.color }} className="calculator__output calculator__output--output">{props.value}</div>
        </>
    )
}

export default ShowText