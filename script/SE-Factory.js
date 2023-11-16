//hero section variables
const burger_logo = document.getElementsByClassName('burger-logo')[0]
const cancle = document.getElementsByClassName('burger-logo')[1]
const left_hero_background = document.getElementsByClassName('left-hero-background')[0]
const animated_txt = document.getElementsByClassName('left-hero-subtitle')[0]
let i = 0

function color_change(color){
    left_hero_background.setAttribute('style', 'background-color: ' + color)
}

setTimeout(() => {
    color_change('rgb(40 238 167 / 93%)') //green
}, 0);
setTimeout(() => {
    color_change('rgb(152 100 218 / 93%)') //purple
}, 4000);
setTimeout(() => {
    color_change('rgb(251 80 142 / 93%)') //pink
}, 8000);

setInterval(() => {
    setTimeout(() => {
        color_change('rgb(40 238 167 / 93%)') //green
    }, 0);
    setTimeout(() => {
        color_change('rgb(152 100 218 / 93%)') //purple
    }, 4000);
    setTimeout(() => {
        color_change('rgb(251 80 142 / 93%)') //pink
    }, 8000);
}, 12000);

let initial_left_subtitle = document.getElementsByClassName("left_hero_subtitle")[0]
const left_subtitle = initial_left_subtitle.innertxt
setInterval(() => {

    
}, 12000);
setInterval(() => {
    left_subtitle.forEach(elm => {
        
    })
}, 4000);
//anvbar variables
const list = document.querySelectorAll(' .list')
const navbar = document.getElementsByTagName("section")[1]
const a = document.querySelectorAll(' .list')

burger_logo.addEventListener('click', (() => {
    navbar.classList.remove('hide')
}))

cancle.addEventListener('click', (() => {
    navbar.classList.add('hide')
}))

a.forEach((elm) => {
    elm.addEventListener('click', (() => {
        navbar.classList.add('hide')}
))
})
