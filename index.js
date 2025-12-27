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

