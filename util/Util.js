


export const isNull = (arg) =>{
    if(arg.length === 0) return true;
    if(arg === undefined) return true;
    if(arg === null) return true;

    return false;
}


