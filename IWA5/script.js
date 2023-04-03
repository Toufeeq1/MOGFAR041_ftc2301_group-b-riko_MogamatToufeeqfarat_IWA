FREE_WARNING = 'Free shipping only applies o single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'
myLocation = 'RSA'
currency = null
customers = '1'

if ('RSA' === myLocation) {
    let shipping = 400 && currency === 'R'
}
if ('NAM' === myLocation) {
    let shipping = 600 && currency === '$'
}
if ('NK' === myLocation) {
    console.log(BANNED_WARNING)
}
if (myLocation !== 'NAM', 'RSA', 'NK') { const shipping = 800 && currency === '$' }

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

shipping = null
currency = '$'

if ('shoes' + 'toys' + 'batteries' + 'pens' + 'shirts' > (1000 && currency === 'R') || (60 && currency === '$')) {
    let shipping = 0
}

console.log('price', currency, shoes + batteries + toys + shipping + shirts)












