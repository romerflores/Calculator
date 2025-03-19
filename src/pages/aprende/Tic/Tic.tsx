import { useState } from "react";
import Title from "../../../components/title/Title";
import "./tic.css"
import Button from "../../../components/button";
import Square from "../../../components/square/Square";

import confetti from "canvas-confetti"

import { TURNS, WINNER_STATES } from "../../../utils/constants/gamesConstants";

import { checkWinner } from "../../../utils/validates";
import WinnerModal from "../../../components/winnerModal/WinnerModal";






function Tic() {
    const [board, setBoard] = useState(() => { ///simpre debemos hacer esto,si hacemos afuera, se carga siempre que se renderize, pero con lo siguiente evaluamos 

        const boardFromStorage = window.localStorage.getItem("board");

        return (boardFromStorage)?JSON.parse(boardFromStorage):Array(9).fill("")
    }
    );

    const [turn, setTurn] = useState(()=>{
        const turnFromStorage=window.localStorage.getItem("turn");
        return turnFromStorage?JSON.parse(turnFromStorage):TURNS.X
    })

    const [winner, setWinner] = useState(()=>{
        const winnerFromStorage=window.localStorage.getItem("winner")
        return winnerFromStorage?JSON.parse(winnerFromStorage):WINNER_STATES.NO_WINNER;
    });



    const updateBoard = (index: number) => {

        if (board[index] == "" && winner == "") {

            //actualiza la tabla
            const newBoard = [...board];//spread
            newBoard[index] = turn;
            setBoard(newBoard)

            //actualiza el turno
            const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
            setTurn(newTurn);


            //Aca guardaremos en local storage
            window.localStorage.setItem('board', JSON.stringify(newBoard))
            window.localStorage.setItem('turn', JSON.stringify(newTurn))
            
            
            
            
            const currtWinner = checkWinner(newBoard);
            window.localStorage.setItem('winner', JSON.stringify(currtWinner))

            if (currtWinner != WINNER_STATES.NO_WINNER) {
                setWinner(currtWinner);
                confetti();
                // alert("finalizo con: " + currtWinner)
            }
        }
    }

    const resetGame = () => {

        setBoard(Array(9).fill(""))
        setTurn(TURNS.X);
        setWinner(WINNER_STATES.NO_WINNER);
        localStorage.clear();

    }


    return (
        <main className="board">
            <Title
                textTitle="3 en Raya Siuuu"
                textColor="var(--white)"
                textSize="30"
            />
            <section className="game">
                {
                    board.map((element:string, index:number) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {element}
                            </Square>
                        )
                    })
                }
            </section>
            <Title textTitle="Turno:" textColor="var(--white)" textSize="20" />
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            <Button textButton="Reiniciar el juego" type="warning" onClick={resetGame}></Button>

            <WinnerModal resetGame={resetGame} winner={winner} ></WinnerModal>
        </main>)
}
export default Tic