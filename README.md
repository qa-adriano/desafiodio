Classificador de Nível de Herói

Este projeto foi desenvolvido como parte de um desafio da DIO (Digital Innovation One), com o objetivo de praticar lógica de programação em JavaScript, utilizando estruturas condicionais (if, else if, else).

Descrição do Projeto

O programa recebe o nome de um herói e a quantidade de experiência (XP) e, com base nesse valor, determina o nível do herói.

Regras de Classificação
XP do Herói	Nível
Menor que 1000	Ferro
1001 a 2000	Bronze
2001 a 5000	Prata
5001 a 7000	Ouro
7001 a 8000	Platina
8001 a 9000	Ascendente
9001 a 10000	Imortal
Acima de 10000	Eterno

let nomeHeroi = "Jesus"
let xpHeroi = 10001
let nivel = ""

if (xpHeroi < 1000) {
  nivel = "ferro"
} else if (xpHeroi <= 2000) {
  nivel = "bronze"
} else if (xpHeroi <= 5000) {
  nivel = "prata"
} else if (xpHeroi <= 7000) {
  nivel = "ouro"
} else if (xpHeroi <= 8000) {
  nivel = "platina"
} else if (xpHeroi <= 9000) {
  nivel = "ascendente"
} else if (xpHeroi <= 10000) {
  nivel = "imortal"
} else {
  nivel = "Eterno"
}

console.log("O meu Herói " + nomeHeroi + " está no nível " + nivel)


Tecnologias Utilizadas

JavaScript

Node.js (para execução no terminal)

https://github.com/qa-adriano/desafiodio
