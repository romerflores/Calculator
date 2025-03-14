const st=new Set(['1','2','3','4','5','6','7','8','9','0'])

export function validateIsBigInteger(cad: string):boolean
{
    // if(cad.length==0)return false;
    for(let i=0;i<cad.length;i++)
    {
        if(!st.has(cad[i]))return false;
    }
    return true;
}