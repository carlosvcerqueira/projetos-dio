// variaveis
// tipos primitivos
let ligado:string = "carlos";
let idade: number = 25;
let altura: number = 1.8;

//tipos especiais:
//null
//undefined
let nulo: null = null;
let indefinido: undefined = undefined;


//tipos abrangentes:
//any
//void
let retorno: void
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name:"felipe",
    cidade:"sp",
    idade: 30,
}

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "tenis",
    preco: 899.99,
    unidades: 15,
}

// arrays

let dados: string[] = ["felipe","ana", "adriana"];
let dados2: Array<string> = ["felipe","ana", "adriana"]

let infos: (string | number)[] = ["carlos", 25, "felipe"]

//métodos arrays
dados.pop();

// tuplas

let boleto:[string, number, number] = ["conta agua", 199.9, 22]

// Datas

let aniversario:Date = new Date("2022-11-28 10:43");
console.log(aniversario.toString())