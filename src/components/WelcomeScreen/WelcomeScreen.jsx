import "./WelcomeScreen.css";
import Table from "../Table/Table";
import { useState } from 'react';

const WelcomeScreen = () => {
    const [firstPlayer, setFirstPlayer] = useState("");
    const [secondPlayer, setSecondPlayer] = useState("");
    const [proceed, setProceed] = useState(false); 

    return (
        <>
            {proceed? 
                <Table firstPlayer={firstPlayer} secondPlayer={secondPlayer} />
            :
                <div className="form">
                    <h2 className="form__title">Имена игроков</h2>
                    <div className="form__input-container">
                        <input 
                            className="form__input" 
                            value={firstPlayer} 
                            onChange={(e) => setFirstPlayer(e.target.value)} 
                            placeholder="Первый игрок" 
                        />
                        <span className="form__focus-border"></span>
                    </div>
                    <div className="form__input-container">
                        <input 
                            className="form__input" 
                            value={secondPlayer} 
                            onChange={(e) => setSecondPlayer(e.target.value)} 
                            placeholder="Второй игрок" 
                        />
                        <span className="form__focus-border"></span>
                    </div>
                    <button onClick={() => setProceed(true)}>Играть</button>
                </div>
            }
        </>
    );
}

export default WelcomeScreen; 
