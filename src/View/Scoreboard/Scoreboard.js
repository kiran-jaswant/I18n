import React, { useState, useEffect } from 'react'
import './Scoreboard.css'

function Scoreboard() {
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const[winner,setWinner]=useState()

    useEffect(() => {
        if (scoreA > 10) {

           
            setWinner("Winner is Team A ");
            setScoreA(0);
        }
        if (scoreB > 10){
           
            setWinner("Winner is Team B");
            setScoreB(0);
        }



    }, [scoreA, scoreB])

    useEffect(()=>{
        setWinner("");

    },[])
    return (

        <div>
            <h1 className='head'>Score Board</h1>
            <h2 className='winner'>{winner}</h2>
            <div className='score-card-container'>
                
                <div className='score-card'>
                    <h2 className='card-head'>Score Card A</h2>
                    <div >
                        <p className='score'>Score:{scoreA}</p>
                        <button className='btn' onClick={() => { setScoreA(scoreA + 1) }}>Increase Score</button>
                    </div>

                </div>
                <div className='score-card'>
                    <h2 className='card-head'>Score Card B</h2>
                    <div >
                        <p className='score'>Score:{scoreB}</p>
                        <button className='btn' onClick={() => { setScoreB(scoreB + 1) }}>Increase Score</button>
                    </div>
                </div>
            </div>
            <button className='btn' onClick={()=>{setScoreA(0);setScoreB(0);setWinner("")}}> Reset</button>
        </div>
    )
}

export default Scoreboard;
