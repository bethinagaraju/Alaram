import React from "react";
import './App.css';

function phones(){
    return(
        <>
            <center>
            <p>TO-DO-LIST</p>
            <input placeholder="write-task-here"/>
            <button onClick='Taskadd()'>ADD</button>
            </center>

        </>
    );
}

export default phones;