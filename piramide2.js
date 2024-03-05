let num = 5

for (let i = 1; i <= num; i++) {
    let piso = ''
    for (let j = 1; j <= i; j++) {
        piso = piso + '*'
    }
    console.log(piso)
}