// script.js

// const 1-root = document(order1),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
//3-status = 3-root.status ? Delivered : Pending
// const first = document.querySelector('[data-biscuits]')
// let info = (first.getAttribute('data-biscuits')) 
// const me = document.querySelector('.count').innerHTML = info

// const first1 = document.querySelector('[data-donuts]')
// let info1 = (first.getAttribute('data-donuts'))




// const first1 = document.querySelector('[data-donuts]')
// let info1 = (first1.getAttribute('data-donuts')) 
// const me1 = document.querySelector('.count').innerHTML = info1
// console.log(me1)

const info1 = document.getElementsByTagName('dl')

const info2 = document.getElementsByTagName('dd')


/** 
*Biscuits of Order 1
*/
const first1 = info1[0].dataset.biscuits
let me = info2[0].innerHTML = first1

/** 
*Donuts of Order 1
*/
const first2 = info1[0].dataset.donuts
let me2 = info2[1].innerHTML = first2  

/**
 * Pancakes of Order 1
 */
const first3 = info1[0].dataset.pancakes
let me3 = info2[2].innerHTML = first3

/**
 * Status of order 1
 */

const first4 = info1[0].dataset.delivered
if (first4 === 'true' ) {
    info2[3].innerHTML = 'Delivered'
} else {
    info2[3].innerHTML = 'pending'
}


console.log(info1)
/** 
*Biscuits of Order 2
*/
const first5 = info1[1].dataset.biscuits
let me4 = info2[4].innerHTML = first5

/** 
*Donuts of Order 2
*/
const first6 = info1[1].dataset.donuts
let me5 = info2[5].innerHTML = first6  

/**
 * Pancakes of Order 2
 */
const first7 = info1[1].dataset.pancakes
let me6 = info2[6].innerHTML = first7


/**
 * Status of order 2
 */
const first8 = info1[1].dataset.delivered
if (first8 === 'true' ) {
    info2[7].innerHTML = 'Delivered'
} else {
    info2[7].innerHTML = 'pending'
}


/** 
*Biscuits of Order 3
*/
const first9 = info1[2].dataset.biscuits
let me7 = info2[8].innerHTML = first9

/** 
*Donuts of Order 3
*/
const first10 = info1[2].dataset.donuts
let me8 = info2[9].innerHTML = first10  

/**
 * Pancakes of Order 3
 */
const first11 = info1[2].dataset.pancakes
let me9 = info2[10].innerHTML = first11


/**
 * Status of order 3
 */
const first12 = info1[2].dataset.delivered
if (first12 === 'true' ) {
    info2[11].innerHTML = 'Delivered'
} else {
    info2[11].innerHTML = 'pending'
}

console.log(info2)














