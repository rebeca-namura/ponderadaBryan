/*let idade = 17;

    if (idade > 15 && idade < 18 || idade > 70 ) {
    console.log("Votar é opcional");
} else if (idade < 17 && idade > 69) {
    console.log("Você é obrigado a votar");
}else{
    console.log("Você não pode votar");
}*/

/*let nota1 = prompt("Qual a primeira nota?");
let nota2 = prompt("Qual a segunda nota?");
let nota3 = prompt("Qual a terceira nota?");*/
let notas = [6, 10, 9 ];

let media = 0;

for (let soma in notas) {
    media += notas[soma]/3;
}

/*let media = (notas[0] + notas[1] + notas[2])/3*/
if (media >= 7){
    console.log("Você está aprovado! Sua média foi " + media);
}else {
    console.log("Você foi reprovado! Sua média foi " + media);
}
