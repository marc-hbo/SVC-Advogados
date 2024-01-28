let navi = document.querySelector('ul')
let openNav = document.querySelector('#open')
let closeNav = document.querySelector('#close')

openNav.addEventListener('click',()=>{
navi.style.top = '0'
})
closeNav.addEventListener('click',()=>{
    navi.style.top ='-100vh'
})