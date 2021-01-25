let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

 function getSummary (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.pageCountSummary);

function tempConverter(fahrenheit) {
    let celcius = (fahrenheit - 32) * (5/9)
    let kelvin = celcius + 273.15

    return `Temp ${fahrenheit}F Temp ${celcius} Temp ${kelvin}`
}

function convertFahrenheit (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celcius: (fahrenheit - 32) * (5/9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps);
console.log(temps.kelvin);

console.log(tempConverter(100));