let grade = function (score, total) {
    let percent = (score / total) * 100;
    let letter = ''
   if (percent >= 90)
   {
        letter = 'A'
   }
   else if (percent >= 80)
   {
       letter = 'B'
   }
   else if (percent >= 70)
   {
       letter = 'C'
   }
   else if (percent >= 60)
   {
       letter = 'D'
   }
   else 
   {
       letter = 'E'
   }

   return `You got a ${letter}! (${percent}%)`
}

console.log(grade(80,100));
console.log(grade(90, 100));
console.log(grade(70,100));
console.log(grade(60,100));
console.log(grade(50,100));