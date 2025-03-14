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

export function primesTo(numero: number):Array<number>
{
    const limite=numero
    const primos=[]
    // console.log(limite,typeof limite)
    const numeros = new Array(limite+5).fill(true);
    numeros[0]=numeros[1]=false

    for(let i=2;i<=limite;i++)
    {
        if(numeros[i])
        {
            primos.push(i);
            for(let j=2*i;j<=limite;j+=i)
            {
                numeros[j]=false 
            }
        }
    }
    return primos
}


export function primesFactoringString(numero:number):string
{
    const criba=primesTo(Math.ceil(Math.sqrt(numero)))
    const ans=[]

    // console.log(criba)
    for(let i=0;i<criba.length;i++)
    {
        while(numero%criba[i]==0)
        {
            ans.push(criba[i])
            numero/=criba[i]
        }
    }
    if(numero!=1)ans.push(numero)

    return ans.join("x")
}
