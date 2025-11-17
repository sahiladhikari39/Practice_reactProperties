import React from "react";

function Detail(props){
    return (
    <div>
    <p>{props.num}</p>
    <p>{props.email}</p>
    </div>
    );
}

export default Detail;