import Scoreboard from "./Scoreboard";
import Card from "./Card";
import images from '../data/imageData.jsx';
import { useState } from "react";

function Game() {
    const [clickedCards, setClickedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    
    const handleCardClick = (cardId) => {
        if (clickedCards.includes(cardId)) {
            setBestScore((prevBestScore) => {
                if (score > prevBestScore) {
                    return score;
                }
                return prevBestScore;
            });
    
            setClickedCards([]);
            setScore(0);
        } else {
            setClickedCards((prevClickedCards) => [...prevClickedCards, cardId]);
            setScore((prevScore) => prevScore + 1);
        }
    };
    

    return (
        <div>
            <Scoreboard score={score} bestScore={bestScore}/>
            <Card images={images} onClick={handleCardClick}/>
        </div>
    );
}

export default Game;
