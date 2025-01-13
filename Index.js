// Ranking

let nickName = "Diego Pimenta"
let result = diference(129, 35)

function diference(victories, defeats){

    return victories - defeats
}

let rankings = [

    {trophies: [0, 10], ranking: "Iron!"},
    {trophies: [11, 20], ranking: "Bronze!"},
    {trophies: [21, 50], ranking: "Silver!"},
    {trophies: [51, 80], ranking: "Gold!"},
    {trophies: [81, 90], ranking: "Diamond!"},
    {trophies: [91, 100], ranking: "Legendary!"},
    {trophies: [101], ranking: "Imortal!"},
        
]

let ranking;

    for(let i = 0; i < rankings.length; i++){
    
        if(result >= rankings[i].trophies[0] && result <= rankings[i].trophies[1]){
        ranking = rankings[i].ranking;
        break;
        }
    }

    console.log("O Herói " + nickName + " tem de saldo de " + result + " vitórias! Ele está no nível " + ranking)