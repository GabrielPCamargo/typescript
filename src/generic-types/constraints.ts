type ObterChaveFn = <O, K extends keyof O>(object: O, chave: K) => O[K];
//extends

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacina: ['vacina1', 'vacina2'],
  idade: 10,
};

console.log(obterChave(animal, 'idade'));
