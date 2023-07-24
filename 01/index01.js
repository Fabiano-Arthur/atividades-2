let peso;
let altura;
let IMC;

console.log("digite seu peso em Kilogramas:");
peso();
console.log("digite sua altura em metros:");
altura();
//não consigo rodar os codigos no terminal do vscode e as formulas das atividades pedidas ficam com erro, ent simplifiquei.
IMC = p/(a*a);
if(IMC <= 18.5){
    console.log("você está abaixo do peso.\nIMC:");
    console.log(IMC);
} else if(IMC > 18,5 && IMC < 25){
    console.log("você esta no peso ideal, Parabéns\nIMC:")
    console.log(IMC);
} else if(IMC >= 25 && IMC < 30){
    console.log("você está acima do peso\nIMC:");
    console.log(IMC);
} else if(IMC >= 30 && IMC < 35){
    console.log("você está com obesidade grau 1\nIMC:");
    console.log(IMC);
} else if(IMC >= 35 && IMC < 40){
    console.log("você está com obesidade grau 2\nIMC:");
    console.log(IMC);
} else if(IMC > 40){
    console.log("você esta com obesidade grau 3\nIMC");
    console.log(IMC);
} else{
    console.log("erro, por favor digite novamente as informações");
}