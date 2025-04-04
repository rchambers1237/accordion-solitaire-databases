import React, { useEffect, useRef, useState } from 'react';

import Deck from '../scripts/cards';

import '../styles/game.css';

const gameDeck = new Deck();

const Game: React.FC = () => {

    const [deck, setDeck] = useState<{ suit: string; rank: number }[]>([]);
    const isInitialized = useRef(false);

    function setGameDeck() {
        gameDeck.createDeck();
        gameDeck.shuffleDeck(); 
        setDeck(gameDeck.getCards());
    }

    useEffect(() => {
        if (!isInitialized.current) {
            setGameDeck();
            isInitialized.current = true;
        }
    }, []);

    return (
        <div className="gameContainer">
            {deck.map(({ suit, rank }, index) => {
                return (
                    <div key={index} className={`card ${suit}-${rank}`} />
                );
            })}
        </div>
    );
};

export default Game;
