
export class BigIntCalculator {
    private static precedence: Record<string, number> = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
    };

    private static isOperator(token: string): boolean {
        return ['+', '-', '*', '/', '%'].includes(token);
    }

    private static toPostfix(expression: string): string[] {
        const output: string[] = [];
        const operators: string[] = [];
        const tokens = expression.match(/\d+|[+\-*/%()]/g) || [];

        for (const token of tokens) {
            if (/\d+/.test(token)) {
                output.push(token);
            } else if (this.isOperator(token)) {
                while (
                    operators.length &&
                    operators[operators.length - 1] !== '(' &&
                    this.precedence[operators[operators.length - 1]] >= this.precedence[token]
                ) {
                    output.push(operators.pop()!);
                }
                operators.push(token);
            } else if (token === '(') {
                operators.push(token);
            } else if (token === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    output.push(operators.pop()!);
                }
                operators.pop();
            }
        }

        while (operators.length) {
            output.push(operators.pop()!);
        }

        return output;
    }

    private static evaluatePostfix(postfix: string[]): bigint {
        const stack: bigint[] = [];

        for (const token of postfix) {
            if (/\d+/.test(token)) {
                stack.push(BigInt(token));
            } else {
                const b = stack.pop()!;
                const a = stack.pop()!;
                switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
                case '%': stack.push(a % b); break;
                }
            }
        }
        return stack.pop()!;
    }

    static evaluate(expression: string): bigint {
        const postfix = this.toPostfix(expression);
        return this.evaluatePostfix(postfix);
    }
}



export function gcd(a: bigint, b: bigint): bigint {
    if (b == 0n) return a;
    return gcd(b, a % b);
}

export function lcm(a: bigint, b: bigint): bigint {
    const mcd = gcd(a, b);
    return ((a * b)) / mcd;
}

export function binPow(base: bigint, exponent: bigint): bigint {
    if (exponent == 0n) return 1n;
    let pot = binPow(base, exponent / 2n);
    pot *= pot

    if (exponent & 1n) pot *= base;

    return pot
}

export function binPowMod(base: bigint, exponent: bigint, modulo: bigint): bigint {
    if (exponent == 0n) return 1n;
    let pot = binPow(base, exponent / 2n) % modulo;
    pot *= pot; pot %= modulo

    if (exponent & 1n) pot = pot * (base % modulo);

    return pot & modulo
}


export function isPrimeSlow(number: bigint): boolean {
    for (let i = 2n; i * i <= number; i++) {
        if (number % i == 0n) return false;
    }
    return true;
}

export function primesTo(numero: number): Array<number> {
    const limite = numero
    const primos = []
    // console.log(limite,typeof limite)
    const numeros = new Array(limite + 5).fill(true);
    numeros[0] = numeros[1] = false

    for (let i = 2; i <= limite; i++) {
        if (numeros[i]) {
            primos.push(i);
            for (let j = 2 * i; j <= limite; j += i) {
                numeros[j] = false
            }
        }
    }
    return primos
}


export function primesFactoringString(numero: number): string {
    const criba = primesTo(Math.ceil(Math.sqrt(numero)))
    const ans = []

    // console.log(criba)
    for (let i = 0; i < criba.length; i++) {
        while (numero % criba[i] == 0) {
            ans.push(criba[i])
            numero /= criba[i]
        }
    }
    if (numero != 1) ans.push(numero)

    return ans.join("x")
}





export function millerRabinTest(n: bigint, k: number): boolean {
    if (n <= 1n) return false; // 0 y 1 no son primos
    if (n <= 3n) return true;  // 2 y 3 son primos

    // Escribir n-1 como d * 2^s
    let s = 0;
    let d = n - 1n;
    while (d % 2n === 0n) {
        d = d / 2n;
        s++;
    }

    // Realizar el test k veces
    for (let i = 0; i < k; i++) {
        // Generar un número aleatorio entre 2 y n-2
        const random = BigInt(Math.floor(Math.random() * Number(n - 3n))) + 2n;
        const a = random < 2n ? 2n : random; // Asegurar que sea al menos 2
        let x = binPowMod(a, d, n);

        if (x === 1n || x === n - 1n) continue;

        for (let j = 0; j < s - 1; j++) {
            x = binPowMod(x, 2n, n);
            if (x === 1n) return false; // No es primo
            if (x === n - 1n) break;
        }

        if (x !== n - 1n) return false; // No es primo
    }

    return true; // Probablemente primo
}
