import { useState } from "react";
import "./Table.css";

const Table = ({ firstPlayer, secondPlayer }) => {
    const [currentPlayer, setCurrentPlayer] = useState(firstPlayer); 
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState(null);

    const determineWinner = (fields) => {
        let combinations = {
            side: [
                [0, 1, 2], 
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }

        for (let combo in combinations) {
            combinations[combo].forEach((pattern) => {
                    if (fields[pattern[0]] === fields[pattern[1]] &&
                        fields[pattern[1]] === fields[pattern[2]]
                        ) {
                            if (fields[pattern[0]] === "o") {
                                setWinner(secondPlayer);
                            } else if (fields[pattern[0]] === "x"){
                                setWinner(firstPlayer);
                            } 
                        } 
            })
        }
    }

    const handleClick = (id) => {
        if (cells[id] !== "") {
            alert("Выберите свободное поле");
            return;
        }

        let fields = [...cells];
        if (currentPlayer === secondPlayer) {
            fields[id] = "o"; 
            setCurrentPlayer(firstPlayer);
        } else {
            fields[id] = "x";
            setCurrentPlayer(secondPlayer);
        }
        determineWinner(fields);
        setCells(fields);
    }

    const handleReset = () => {
        setWinner(null); 
        setCells(Array(9).fill(""));
        setCurrentPlayer(firstPlayer); 
    }

    const Cell = ({ id }) => {
        return (
            <td onClick={() => handleClick(id)}>
                {cells[id]}
            </td>
        );
    }

    return (
        <div className="table-container">
            <h2 className="table-container__title">Следующий ход: {currentPlayer}</h2>
            <table cellSpacing={0} className="table">
                <tbody>
                    <tr className="table__first-row">
                        <Cell id={0} />
                        <Cell id={1} />
                        <Cell id={2} />
                    </tr>
                    <tr className="table__second-row">
                        <Cell id={3} />
                        <Cell id={4} />
                        <Cell id={5} />
                    </tr>
                    <tr className="table__third-row">
                        <Cell id={6} />
                        <Cell id={7} />
                        <Cell id={8} />
                    </tr>
                </tbody>
            </table>
            <div className={winner !== null || !cells.includes("") ? "table__winning-message show" : "table__winning-message"}>
                <p>{winner ? `Победитель: ${winner}` : !cells.includes("") ? "Ничья!" : null}</p>
                <button onClick={handleReset}>Назад</button>
            </div>
        </div>
    );
}

export default Table; 
