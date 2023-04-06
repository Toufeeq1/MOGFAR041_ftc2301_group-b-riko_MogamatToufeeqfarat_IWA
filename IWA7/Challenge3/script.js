const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
let leobal = leoBalance * -1
let sarbal = sarahBalance * -1
let end = sarbal.toFixed(2)
const owed = parseFloat( leobal + sarbal)
const leo = `${leoName} ${leoSurname}`+`(Owed R ${leobal})\n`
const sarah =  `${sarahName}` + `${sarahSurname}` + `(Owed R ${parseFloat(end)})\t \n`
const total = "\nTotal amount owed: "
const result = leo + sarah + divider + total + "R" + owed.toFixed(2) + `\n${divider}`


console.log(result)



// Leo Musvaire (Owed: R 9394.00)
// Sarah Kleinhans (Owed: R 4582.20)

// ----------------------------------
//   Total amount owed: R 14 976.20
// ----------------------------------