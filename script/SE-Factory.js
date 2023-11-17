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


//programs part
const program_title = document.querySelectorAll(' .sub-title')
const fcs = document.getElementsByClassName('fcs')[0]
const fsw = document.getElementsByClassName('fsw')[0]
const fsd = document.getElementsByClassName('fsd')[0]
const uix = document.getElementsByClassName('uix')[0]
const programs = document.querySelectorAll(' .programs-contents')

function add_txt_color(elm, index) {
    if(index == 0){elm.classList.add('orange-txt')}
        else if (index == 1){elm.classList.add('green-txt')}
        else if (index == 2)(elm.classList.add('purple-txt'))
        else if (index == 3)(elm.classList.add('pink-txt'))
}

function remove_txt_color(elm, index) {
    if(index == 0){elm.classList.remove('orange-txt')}
        else if (index == 1){elm.classList.remove('green-txt')}
        else if (index == 2)(elm.classList.remove('purple-txt'))
        else if (index == 3)(elm.classList.remove('pink-txt'))
}

program_title.forEach((elm, index) => {
    elm.addEventListener('click', function() {
        program_title.forEach((element, i) => {
            if (element.classList.contains('pressed') && element != elm ){
                element.classList.remove('pressed')
                remove_txt_color(element, i)
            }
        })
        if (!elm.classList.contains('pressed')) {
            elm.classList.add('pressed')
            add_txt_color(elm, index)
        }

        programs.forEach((elmnt,i) => {
          if(i == index && elmnt.classList.contains('hide')){
            elmnt.classList.remove('hide')
            elmnt.classList.add('opacity')
          }
          if(i != index){
            elmnt.classList.add('hide')
            elmnt.classList.remove('opacity')
          }  
        })
    })
})

//testiminials functionality

const testimonial = document.querySelectorAll(' .testimonials-content')
const dot = document.querySelectorAll(' dot')
const testimonials = document.getElementsByClassName('testimonials-container')[0]
let j = 0
setInterval(() => {
setInterval(() => {
    testimonials.setAttribute('style', 'transform: translatex(-100%) ')
    testimonials.setAttribute('style', 'transition: transform 10000ms ease')
    j +=1
    dot.forEach((elm,i) => {
        if(j == i){elm.setAttribute('style', 'background-color: black')}
        else {elm.setAttribute('style', 'background-color: light-grey')}
    })
}, 4000);
testimonials.setAttribute('style', 'transform: translatex(+400%) ')
testimonials.setAttribute('style', 'transition: transform 10000ms ease')
j = 0
}, 12000)

const show_ans = document.querySelectorAll(' .question')
const ans = document.querySelectorAll(' .answers')

show_ans.forEach((el, i) => {
    el.addEventListener('click', (() => {
        console.log('collapse' + i)
        if(show_ans.classList.contains('collapse')){show_ans.classList.remove('collapse')}
        else if (!show_ans.classList.contains('collapse')){show_ans.classList.add('collapse')}
}))
})