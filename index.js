let vitorias = 30
let derrotas = 10

console.log(`O Herói tem saldo de ${(vitorias - derrotas)} e está no nível de ${playerRanking(vitorias,derrotas)}`)

function playerRanking (win, loss){
    let ranking = win - loss
    if (ranking <= 10){
      return "Ferro"
    } else if (ranking >= 11 && ranking <= 20){
      return "Bronze"
    } else if (ranking >= 21 && ranking <= 50){
      return "Prata"
    } else if (ranking >= 51 && ranking <= 80){
      return "Ouro"
    } else if (ranking >= 81 && ranking <= 90){
      return "Diamante"
    } else if (ranking >= 91 && ranking <= 100){
      return "Lendário"
    } else {
      return "Imortal"
    }
  
  }
