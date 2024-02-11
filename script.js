let arrow = document.querySelector('.arrow')
let body = document.querySelector('body')

// document.addEventListener('scroll', ()=>{
//     console.log(window.pageYOffset, window.innerHeight)
// })

let left = document.querySelector('.left')
let right = document.querySelector('.right')

left.addEventListener('click',()=>{
    changeLocation(-1);
})
right.addEventListener('click',()=>{
    changeLocation(1);
})
let loc_cards = document.querySelectorAll('.loc-card')
let curr_el = 0;




function changeLocation(num){
    loc_cards[curr_el].classList.remove('active');
        curr_el += num
        if (curr_el == loc_cards.length){
            curr_el = 0;
        }else if (curr_el < 0){
            curr_el = loc_cards.length-1
        }
        loc_cards[curr_el].classList.add('active')
        console.log(curr_el)
}