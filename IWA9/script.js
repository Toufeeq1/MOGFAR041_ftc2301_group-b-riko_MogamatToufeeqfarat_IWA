const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport: 10.2,
}

const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want
//added parseInt because tas is a string 
const taxAsDecimal = parseInt(tax[913]) / 100
const startingAfterTax =salary - (salary* taxAsDecimal)
const type = `${size}-${lodging}`
const balance = startingAfterTax - expenses.transport - expenses.food - rent[type] 
console.log(balance.toFixed(2))

/*
 All expenses are grouped in the expenses object.
Instead of having a hardcoded tax amount, there is a tax object that has several reference codes we can use to get different tax amounts. The one that we will use is 913
Rent is listed using keys that are created from a combination of loading types and sizes.
The matching key for rent should be created by interpolating the size and lodging variables provided.
The number provided by this key should be used as the rent amount.
You don’t have to worry about having space separators between numbers in this version, you can just log it as a single number value, rounded to two decimal places.
*/