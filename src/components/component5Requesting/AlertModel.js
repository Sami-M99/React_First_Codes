import React from "react";
import './RequestCard.css'

export default function AlertModel({show, message, textColor}){
    if(show){
        return(
            <div className= "alert">
                <div className="alertContent">
                    <h1 style={{color: textColor}} >{message}</h1>
                </div>
            </div>
        );
    }
    else{
        return(<></>);
    }
}