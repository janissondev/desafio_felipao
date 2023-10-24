
let nome = prompt("Olá, herói! Informe o seu nome:");
let desafiosRealizados = Number(prompt("Muito bom ver você por aqui, " + nome + ". Agora nos informe quantos desafios você resolveu (cada desafio vale 200pts)"));

let pontosXP = 0; 
let nivelDoHeroi;

for(contador = 1; contador <= desafiosRealizados; contador++) {
    pontosXP += 200;
}

if (pontosXP <= 1000) {
    nivelDoHeroi = "Ferro";

} else if (pontosXP >= 1001 && pontosXP <= 2000) {
    nivelDoHeroi = "Bronze";

} else if (pontosXP >= 2001 && pontosXP <= 5000) {
    nivelDoHeroi = "Prata";

} else if (pontosXP >= 5001 && pontosXP <= 7000) {
    nivelDoHeroi = "Ouro";

} else if (pontosXP >= 7001 && pontosXP <= 8000) {
    nivelDoHeroi = "Platina";

} else if (pontosXP >= 8001 && pontosXP <= 9000) {
    nivelDoHeroi = "Ascendente";

} else if (pontosXP >= 9001 && pontosXP <= 10000) {
    nivelDoHeroi = "Imortal";

} else if (pontosXP >= 10001) {
    nivelDoHeroi = "Radiante";
} 

console.log(`O herói de nome ${nome} está no nível ${nivelDoHeroi}`);

