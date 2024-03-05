let num1 = 12
let num2 = 18

for (let i = 1; i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
       console.log(i + ' es divisor comun de ' + num1 + ' y ' + num2) 
    }
}
