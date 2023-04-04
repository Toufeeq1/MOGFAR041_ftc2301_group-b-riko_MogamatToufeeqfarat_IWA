FREE_WARNING = 'Free shipping only applies o single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'
let myLocation = 'RSA'
let currency = null
let customers = '2'


if ('RSA' === myLocation) {
  shipping = 400, currency = 'R'
}
else if ('NAM' === myLocation) {
  shipping = 600, currency = 'N$'
}
else if ('NK' === myLocation) {
  console.log(BANNED_WARNING)
}
else if (myLocation !== 'NAM', 'RSA', 'NK') { const shipping = 800 && currency === '$' }

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

shipping = null
// currency = 'N$'


if (shoes + toys + batteries + pens + shirts > (1000 && currency === 'R') || (60 && currency === '$')) {
  let shipping = 0
}

if (shipping === 0 && customers === 1) { console.log(FREE_WARNING) }


console.log('price', currency, shoes + batteries + toys + shipping + shirts)












