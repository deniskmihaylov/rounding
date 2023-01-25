function solve (n = Number, n2 = Number) {


    if (n2 < 15) {
        console.log(parseFloat(n.toFixed(n2))); 
    } else {
        console.log(parseFloat(n.toFixed(15)))
    }
}


solve (10.34, 30)
