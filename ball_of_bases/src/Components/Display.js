import React from "react";

export default function Display(props) {

    return(
        <>
            <h1>Strikes: {props.strikeCount}</h1>
            <h1>Strikes: {props.ballCount}</h1>
        </>
    );
};