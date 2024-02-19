let arrow = document.querySelector('.arrow')
let body = document.querySelector('body')
let loc = document.querySelectorAll('.loc')
let left_btn = document.querySelector('.leftbtn')
let rigth_btn = document.querySelector('.rightbtn')

let i = 0
rigth_btn.addEventListener('click', ()=>{
    loc[i].classList.remove('active')
    i += 1
    if(i == loc.length){i = 0}
    loc[i].classList.add('active')
})
left_btn.addEventListener('click', ()=>{
    loc[i].classList.remove('active')
    if(i <= 0){
        i = loc.length
    }
    i -= 1
    loc[i].classList.add('active')
})


document.addEventListener('scroll', ()=>{
    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    // console.log(percent)
    if(percent >= 95){
        arrow.style.bottom = '110px'
    }else{
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
bookbtn.addEventListener('click', ()=>{
    book.style.display = 'block'
})

let otmena = document.querySelector('.otmena')
otmena.addEventListener('click', ()=>{
    book.style.display = 'none'
})


let bookingresult = document.querySelector('.bookingresult')
let btn = document.querySelector('.button-60')
let resulttext = document.querySelector('.resulttext')
btn.addEventListener('click', ()=>{
    let roomtype = document.querySelector('.form-select').value
    let checkin = document.querySelector('#bla1').value
    let checkout = document.querySelector('#bla2').value
    resulttext.innerHTML = `Тип комнаты:  ${roomtype}<br>Дата заезда:  ${checkin}<br>Дата выезда:  ${checkout}`
    bookingresult.style.display = 'flex'
    bookingresult.style.opacity = 1
    setTimeout(()=>{
        bookingresult.style.opacity = 0
        bookingresult.style.display = 'none'
}, 3000)
})



