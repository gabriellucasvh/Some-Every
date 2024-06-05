let nomes = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 35 }
]
// O retorno padrão é em boolean

// Utilizando o some
if (nomes.some(pessoa => pessoa.nome === 'Maria')) {
  console.log("O nome requisitado está presente")
} else {
  console.log("O nome não está presente")
}
// Verifica se o nome está presente no array

// Utilizando o every
if (nomes.every(pessoa => pessoa.idade >= 25)) {
  console.log("Todos possuem idade igual ou superior a 25 anos")
} else {
  console.log("Nem todos possuem idade igual ou superior a 25 anos")
}
// Verifica se todos possuem idade igual ou superior a 25 anos
