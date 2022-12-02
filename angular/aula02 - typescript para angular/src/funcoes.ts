//funções
function addNumber(x:number, y:number): number {
    return x + y;
}

function addToHello(name:string):string {
    return `Hello, ${name}`
}

function callToPhone(phone:number | string): number | string {
    return phone
}

async function getDataBase(id:number): Promise<number | string> {
    return "felipe"
}

let soma: number = addNumber(15, 3);

console.log(callToPhone(998294641));