import { WINNER_STATES,TURNS } from "../../utils/constants/gamesConstants"
import Button from "../button"
import Square from "../square/Square"

interface winnerModalProps{
    winner:string,
    resetGame:()=>void;
}

function WinnerModal(props:winnerModalProps) {

    const {winner,resetGame}=props

    return <>
        {
            winner != WINNER_STATES.NO_WINNER && (
                <section className="winner">
                    <div className="text">
                        <h2>{winner}</h2>
                        {
                            (winner == WINNER_STATES.TIE) && ("El juego ha terminado en empate")
                        }
                        {
                            (winner == WINNER_STATES.O_WON) && <Square>{TURNS.O}</Square>
                        }
                        {
                            (winner == WINNER_STATES.X_WON) && <Square>{TURNS.X}</Square>
                        }


                        <footer>
                            <Button onClick={resetGame} textButton="Empezar de nuevo" type="selected"></Button>
                        </footer>

                    </div>
                </section>


            )
        }
    </>

}

export default WinnerModal