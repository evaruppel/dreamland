let arrow = document.querySelector('.arrow')
let body = document.querySelector('body')
let loc = document.querySelectorAll('.loc')
let left_btn = document.querySelector('.leftbtn')
let rigth_btn = document.querySelector('.rightbtn')

let i = 0
rigth_btn.addEventListener('click', ()=>{
    loc[i].classList.remove('active')
    i += 1
    if(i == loc.length - 1){i = 0}
    loc[i].classList.add('active')
})
left_btn.addEventListener('click', ()=>{
    loc[i].classList.remove('active')
    if(i == 0){
        i = loc.length - 1
    }
    i -= 1
    loc[i].classList.add('active')
})


// document.addEventListener('scroll', ()=>{
//     console.log(window.pageYOffset, window.innerHeight)
// })



// loc.forEach(element => {
//     element.addEventListener('click', ()=>{
//         element.classList.remove('active')
//         i += 1
//         if(i == loc.length - 1){i = 0}
//         loc[i].classList.add('active')
//     })
// });

