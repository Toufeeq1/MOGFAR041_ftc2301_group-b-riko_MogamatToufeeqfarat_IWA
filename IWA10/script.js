const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId || 'ID {futureId} not created yet')

//let copied = holidays[christmas]
//added comma at the end of the of the and added date 
 const copied = {
     id: holidays[christmas].id,
     name: holidays[christmas].name,
     date: new Date(`26 December ${currentYear}`)
    
 }
copied.name = "X-mas" ;
 
correctDate = copied.date
correctDate.hours = 0
correctDate.minutes = 0
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
//added && instead of the || so it wil show and instead of or also changed the no equal sign (!=) to strictly equal (===)
console.log('ID change:', holidays[christmas].id !== copied.id && copied.id)
console.log('Name change:', holidays[christmas].name != copied.name && copied.name)
console.log('Date change:', holidays[christmas].date != copied.date && copied.date)
// console.log( copied.id ) test 
// console.log( holidays[christmas].id ) test 

const firstHolidayTimestamp = Math.min(
   new Date(holidays[0].date).getTime(),
   new Date(holidays[1].date).getTime(),
   new Date(holidays[2].date).getTime(),
   new Date(holidays[3].date).getTime(),
   new Date(holidays[4].date).getTime(),
   new Date(holidays[5].date).getTime(),
   new Date(holidays[6].date).getTime(),
   new Date(holidays[7].date).getTime(),
   new Date(holidays[8].date).getTime(),  
)

const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)  

console.log(lastHolidayTimestamp)
 const firstDay = new Date(firstHolidayTimestamp).getDate().toString() ;
  const firstMonth = new Date(firstHolidayTimestamp).getMonth().toString() + 1;
 const lastDay = new Date(lastHolidayTimestamp ).getDate() ;
  const lastMonth = new Date(lastHolidayTimestamp ).getMonth() + 1 ; 


console.log(`${firstDay.padStart(2, '0')}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)
 // added Math.floor so the code will be whole number and * 8 so it will only generate number from 1 to 8
const randomHoliday = holidays[Math.floor(Math.random() * 9)]
console.log(randomHoliday.date.toLocaleDateString())