let tipCalculator = function(total, percent = .2){
    tipPercent = percent * 100
    tip = total * percent
    return `A ${tipPercent}% tip on a $${total} total would be $${tip}.`
}

console.log(tipCalculator(50));
console.log(tipCalculator(60, .3));