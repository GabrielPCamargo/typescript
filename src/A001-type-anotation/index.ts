/* eslint-disable */
//Tipos básicos são escrito em minúsculos

let nome: string = 'luiz';
let idade: number = 5;
let adulto: boolean = false;
let simbolo: symbol = Symbol('luiz');
// let big: bigint = 10n;//

//array

let array: Array<number> = [1, 2, 3, 4]
let anotherArray: number[] = [1, 2, 3, 4]

//objetos

let pessoa: {nome: string, idade: number, adulto?:boolean} = {
  nome: 'teste',
  idade: 10,
};

//funções
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

// any = qualquer coisa (evitar ao máximo usar)
// void = vázio

// readonly => propriedade do objeto não pode ser alterada.

// Tuple      array de vários tipos e tamanho específico
const dadosCliente: readonly [number, string] = [1, 'teste'];

//Never     nunca retorna nada

// Enum cria um tipos variados
// Criando dois, eles são somados
//Mas não há segurança
enum Cores {
  vermelho = 10,
  azul = 1000,
  roxo = '',
}

Cores.vermelho;

// Unknown  tipo any (mas é pai do any e realiza verficações) um any mais seguro

//Union types
type teste = string | number | boolean;

// Tipo literal: só pode ser aquele valor ex: const de número é um subtipo de número de

let a: 100 = 100;
// Jeito certo
let b = 100 as const;

const Pessoa = {
  nome: 'luiz' as const,
  sobrenome: 'miranda',
} //asserção

function escolhaCor(cor: 'vermelho' | 'amarelo' | 'azul') {

}

//Type aliases
// Pode-se usar números grandes com underline só para facilitar a visualização

type Idade = number;


//Intersection types

type Intersection = 'teste' & 'B';

// Funções como tipo

type callback = (item: string) => string;

// O structural type system
//Tem que possuir a estrutura do tipo, não a identidade.

//Type assertions

  //non null-assertion
  const body = document.querySelector('body')!;

  //Type assertion, você tem certeza que ele virá
  const body2 = document.querySelector('body') as HTMLBodyElement;

