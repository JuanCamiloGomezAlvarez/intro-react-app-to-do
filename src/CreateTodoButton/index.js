import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    }


    return(
        <button className="CreateTodoButton" 
                onClick={ () => onClickButton("este es el mensaje enviado")} 
                >
            +
        </button>
    );
}

export {CreateTodoButton};
