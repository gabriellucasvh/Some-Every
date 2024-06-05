# Verificação de Propriedades em Arrays de Objetos em JavaScript

Este projeto demonstra como utilizar os métodos `some` e `every` do JavaScript para verificar propriedades em arrays de objetos. O exemplo verifica a presença de um nome específico e se todos os objetos atendem a uma condição de idade.

## Descrição

O código inclui uma lista de pessoas, cada uma com um nome e uma idade. Utilizamos os métodos `some` e `every` para realizar verificações específicas sobre os dados:

- `some`: Verifica se pelo menos um objeto no array atende a uma condição.
- `every`: Verifica se todos os objetos no array atendem a uma condição.

## Estrutura do Projeto

- `nomes`: Um array de objetos, onde cada objeto representa uma pessoa com `nome` e `idade`.

### Código

```javascript
let nomes = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 35 }
];

// Utilizando o some
if (nomes.some(pessoa => pessoa.nome === 'Maria')) {
  console.log("O nome requisitado está presente");
} else {
  console.log("O nome não está presente");
}

// Utilizando o every
if (nomes.every(pessoa => pessoa.idade >= 25)) {
  console.log("Todos possuem idade igual ou superior a 25 anos");
} else {
  console.log("Nem todos possuem idade igual ou superior a 25 anos");
}
