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