let arrow = document.querySelector('.arrow')
let body = document.querySelector('body')
let loc = document.querySelectorAll('.loc')
let left_btn = document.querySelector('.leftbtn')
let rigth_btn = document.querySelector('.rightbtn')

let i = 0
rigth_btn.addEventListener('click', () => {
    loc[i].classList.remove('active')
    i += 1
    if (i == loc.length) { i = 0 }
    loc[i].classList.add('active')
})
left_btn.addEventListener('click', () => {
    loc[i].classList.remove('active')
    if (i <= 0) {
        i = loc.length
    }
    i -= 1
    loc[i].classList.add('active')
})


document.addEventListener('scroll', () => {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    console.log(percent)
    if (percent >= 95) {
        arrow.style.display = 'block'
        arrow.style.bottom = '110px'
    } else if (percent < 10) {
        arrow.style.display = 'none'
    } else {
        arrow.style.display = 'block'
        arrow.style.bottom = '10px'
    }
})


// loc.forEach(element => {
//     element.addEventListener('click', ()=>{
//         element.classList.remove('active')
//         i += 1
//         if(i == loc.length - 1){i = 0}
//         loc[i].classList.add('active')
//     })
// });


let bookbtn = document.querySelector('.text3')
let book = document.querySelector('.book')
bookbtn.addEventListener('click', () => {
    book.style.display = 'block'
    // book.style.opacity = '0'
    anime({
        targets: book,
        duration: 500,
        right: 0,
        // opacity : 1,
        easing: 'easeInBack'
    }).finished.then(() => { })

})

let fenominalno = document.querySelector('.fenominalno')
let otmena = document.querySelector('.otmena')
otmena.addEventListener('click', () => {
    fenominalno.style.display = 'block'
    setTimeout(() => {
        fenominalno.style.display = 'none'

    }, 2000)

    anime({
        targets: book,
        duration: 500,
        right: -500,
        easing: 'easeOutBack'
    }).finished.then(() => {
        book.style.display = 'none'

    })

})


let bookingresult = document.querySelector('.bookingresult')
let btn = document.querySelector('.button-60')
let resulttext = document.querySelector('.resulttext')
btn.addEventListener('click', () => {
    let roomtype = document.querySelector('.form-select').value
    let checkin = document.querySelector('#bla1').value
    let checkout = document.querySelector('#bla2').value
    anime({
        targets: book,
        duration: 500,
        right: -500,
        easing: 'easeOutBack'
    }).finished.then(() => {
        book.style.display = 'none'
        // book.style.right = '0'
    })

    resulttext.innerHTML = `Тип комнаты:  ${roomtype}<br>Дата заезда:  ${checkin}<br>Дата выезда:  ${checkout}`
    bookingresult.style.display = 'flex'
    bookingresult.style.top = '-150px'
    anime({
        targets: bookingresult,
        duration: 1500,
        top: 0,
        easing: 'easeOutQuad'
    }).finished.then(() => { 
    setTimeout(() => {
        anime({
            targets: bookingresult,
            duration: 1500,
            delay: 0,
            top: -250,
            easing: 'easeOutQuad'
        }).finished.then(() => { bookingresult.style.display = 'none' })
    }, 3000)})
})



