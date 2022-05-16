export class Empresa {
  public readonly nome: string; //public não necessário
  private readonly colaboradores: Colaborador[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionaColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}
//abreviação. a cima.
// Readonly é similar a const, não pode ser alterado quando é declaração literal,
//por isso array e objeto pode ser alterado
//clase pode ser um tipo

//Se não passar public é public (redundância)
