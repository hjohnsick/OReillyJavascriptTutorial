let fahrenheit = 50
let celcius = (fahrenheit - 32) * (5/9)
let kelvin = celcius + 273.15
let stringVal = "The conversion to celcius is: "
let stringKel = "The conversion to kelvin is: "
console.log(stringVal.concat(celcius));
console.log(stringKel.concat(kelvin));