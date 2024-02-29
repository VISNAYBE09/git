let operando1 = 1
let operando2 = 0
const sum = 1
const rest = 2
const multi = 3
const div = 4

operacion = div

if (operacion === sum) {
    total = operando1+operando2
    console.log(total)
} else if(operacion === rest){
    total = operando1-operando2
    console.log(total)
} else if(operacion === multi){
    total = operando1*operando2
    console.log(total)
} else if(operacion === div && operando2 > 0){
    total = operando1/operando2
    console.log(total)
} else {
    console.log("Not available")
}