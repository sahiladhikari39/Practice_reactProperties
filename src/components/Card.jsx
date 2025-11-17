import React from "react";
import Detail from "./Detail";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img src={props.img} className="circle-img" />
            </div>
            <div className="bottom">
                <Detail num={props.num} email={props.email} />
            </div>
      </div>
    );
}

export default Card;