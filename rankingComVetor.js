let vitorias = 60
let derrotas = 10

console.log(`O Herói tem saldo de ${(vitorias - derrotas)} e está no nível de ${playerRanking(vitorias,derrotas)}`)

function playerRanking (win, loss){
    let ranking = win - loss
    let listRanking = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
    if (ranking <= 10){
      return listRanking[0]
    } else if (ranking >= 11 && ranking <= 20){
      return listRanking[1]
    } else if (ranking >= 21 && ranking <= 50){
      return listRanking[2]
    } else if (ranking >= 51 && ranking <= 80){
      return listRanking[3]
    } else if (ranking >= 81 && ranking <= 90){
      return listRanking[4]
    } else if (ranking >= 91 && ranking <= 100){
      return listRanking[5]
    } else {
      return listRanking[6]
    }
  
  }
