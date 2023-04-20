// scripts.js
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

const info1 = document.getElementsByTagName('span')
const info2 = document.getElementsByClassName('checkin')
const info3 = document.getElementsByTagName('button')
console.log(info2)






/**
 * color change to button
 */
let nocolor1 = info2[0].removeAttribute('style')
let nocolor2 = info2[1].removeAttribute('style')
let nocolor3 = info2[2].removeAttribute('style')

/**
 * disableing buttons
 */
if (info1[0].innerText === 'overdue'){
    info3[0].disabled = true;
    info3[1].disabled = true;
    let colorChange = info1[0].style.color = STATUS_MAP['overdue'].color;
} else if (info1[0].innerText === 'reserved'){
    info3[0].disabled = true;
    info3[2].disabled = true;
    let colorChange2 = info1[1].style.color = STATUS_MAP['reserved'].color;
} else if (info1[0].innerText === 'shelf'){
    info3[1].disabled = true;
    let colorChange3 = info1[2].style.color = STATUS_MAP['shelf'].color;
} 

if (info1[1].innerText === 'overdue'){
    info3[3].disabled = true;
    info3[4].disabled = true;
    let colorChange = info1[0].style.color = STATUS_MAP['overdue'].color;
} else if (info1[1].innerText === 'reserved'){
    info3[3].disabled = true;
    info3[5].disabled = true;
    let colorChange2 = info1[1].style.color = STATUS_MAP['reserved'].color;
} else if (info1[1].innerText === 'shelf'){
    info3[5].disabled = true;
    let colorChange3 = info1[2].style.color = STATUS_MAP['shelf'].color;
} 

if (info1[2].innerText === 'overdue'){
    info3[6].disabled = true;
    info3[7].disabled = true;
    let colorChange = info1[0].style.color = STATUS_MAP['overdue'].color;
} else if (info1[2].innerText === 'reserved'){
    info3[6].disabled = true;
    info3[8].disabled = true;
    let colorChange2 = info1[1].style.color = STATUS_MAP['reserved'].color;
} else if (info1[2].innerText === 'shelf'){
    info3[8].disabled = true;
    let colorChange3 = info1[2].style.color = STATUS_MAP['shelf'].color;
} 


console.log(info1)





// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'