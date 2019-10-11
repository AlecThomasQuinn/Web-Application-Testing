import React, { useEffect, useState } from "react";
import Display from './Display'

export default function Gameboard() {
    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);

    const strike =()=>{
        setStrikeCount(strikeCount+1)
    }

    const ball =()=>{
        setBallCount(ballCount+1)
    }

    const foul =()=>{
        if(strikeCount < 2){
            setStrikeCount(strikeCount+1)
        }
    }

    const hit =()=>{
        setStrikeCount(0);
        setBallCount(0);
    }



    return(
        <>
            <Display 
                strikeCount={strikeCount}
                ballCount={ballCount}
            />
            <button onClick={strike}>Strike</button>
            <button onClick={ball}>Ball</button>
            <button onClick={foul}>Foul</button>
            <button onClick={hit}>Hit!</button>
        </>
    );

}