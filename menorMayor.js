let num1 = 7;
let num2 = 2;
let num3 = 7;
let num4 = 4;
let num5 = 5;

if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
    console.log(num1 + ' Es el mayor de todos');
} else if (num2 > num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    console.log(num2 + ' Es el mayor de todos');
} else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    console.log(num3 + ' Es el mayor de todos');
} else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
    console.log(num4 + ' Es el mayor de todos');
} else {
    console.log(num5 + ' Es el mayor de todos');
}

if (num1 <= num2 && num1 <= num3 && num1 <= num4 && num1 <= num5) {
    console.log(num1 + ' Es el menor de todos');
} else if (num2 <= num1 && num2 <= num3 && num2 <= num4 && num2 <= num5) {
    console.log(num2 + ' Es el menor de todos');
} else if (num3 <= num1 && num3 <= num2 && num3 <= num4 && num3 <= num5) {
    console.log(num3 + ' Es el menor de todos');
} else if (num4 <= num1 && num4 <= num2 && num4 <= num3 && num4 <= num5) {
    console.log(num4 + ' Es el menor de todos');
} else {
    console.log(num5 + ' Es el menor de todos');
}
if (num1 === num2){
    console.log(num1 + ' and '+ num2 + ' are equals')
} else if (num1 === num3){
    console.log(num1 + ' and '+ num3 + ' are equals')
} else if (num1 === num4){
    console.log(num1 + ' and '+ num4 + ' are equals')
} else if (num1 === num5){
    console.log(num1 + ' and '+ num5 + ' are equals')
} else if (num2 === num3){
    console.log(num2 + ' and '+ num3 + ' are equals')
} else if (num2 === num4){
    console.log(num2 + ' and '+ num4 + ' are equals')
}else if (num2 === num5){
    console.log(num2 + ' and '+ num5 + ' are equals')
}else if (num3 === num4){
    console.log(num3 + ' and '+ num4 + ' are equals')
}else if (num3 === num5){
    console.log(num3 + ' and '+ num5 + ' are equals')
} else if (num4 === num5){
    console.log(num4 + ' and '+ num5 + ' are equals')
}
