let m;
let c;
let i;
let t;

console.log("digite o tempo em meses:");
t();
console.log("digite o valor do capital inicial:");
c();

console.log("digite o valor do montante");
m();
i = c * Math.pow(m / c,1 / t)- 1;
console.log("o valor da taxa é:",i);