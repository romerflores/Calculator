import { COMBINATIONS_WIN,TURNS,WINNER_STATES } from "./constants/gamesConstants";


const st = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
const stInfix = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '+', '*', '%', '/', '-']);

export function validateStringIsBigInteger(cad: string): boolean {
    // if(cad.length==0)return false;
    for (let i = 0; i < cad.length; i++) {
        if (!st.has(cad[i])) return false;
    }
    return true;
}

export function validateStringIsInfix(cad: string): boolean {
    for (let i = 0; i < cad.length; i++) {
        if (!stInfix.has(cad[i])) return false;
    }
    return true;
}


export const checkWinner = (boardToCheck: Array<string>) => {

    for (const combo of COMBINATIONS_WIN) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] != "" &&
            boardToCheck[a] == TURNS.X &&
            boardToCheck[b] != "" &&
            boardToCheck[b] == TURNS.X &&
            boardToCheck[c] != "" &&
            boardToCheck[c] == TURNS.X) {
            //O gano
            return WINNER_STATES.X_WON;
        }
    }

    for (const combo of COMBINATIONS_WIN) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] != "" &&
            boardToCheck[a] == TURNS.O &&
            boardToCheck[b] != "" &&
            boardToCheck[b] == TURNS.O &&
            boardToCheck[c] != "" &&
            boardToCheck[c] == TURNS.O) {
            //O gano
            return WINNER_STATES.O_WON;
        }
    }
    for (let i = 0; i < 9; i++) {
        if (boardToCheck[i] == "") {
            return WINNER_STATES.NO_WINNER;
        }
    }

    return WINNER_STATES.TIE;

}