/* eslint-disable @typescript-eslint/no-namespace */
namespace Meunamespace {
  export class PessoaDoNamespace {}
}

const pessoDoNamespace = new Meunamespace.PessoaDoNamespace();

// import  (tem que mudar configuração de módulos para ficar todos os arquivos em um só)
// e outfile (1 arquivo só)

/// <reference path="./module"/>

console.log(new Meunamespace.PessoaDoNamespace());
