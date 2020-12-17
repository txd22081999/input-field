const form = document.querySelector('form');
const notify = document.querySelector('.notify');
const input = document.querySelector('input')
const send = document.querySelector('.send');
const thank = document.querySelector('.thank');
const body = document.querySelector('body');

// console.log(thank);
// console.log(notify);

// console.log(thank);
thank.addEventListener('click', () => {
    console.log('go');
    body.style.transform = "scale(0)"
    body.style.background = "white"
})

notify.addEventListener('click', () => {
    console.log('asd');
    form.style.width = '100%'
    notify.style.transform = "scale(0)"

    input.style.transitionDelay = "0.7s" ;
    input.style.transform = "translateX(0)"
    input.style.opacity = "1"

    send.style.transitionDelay = "0.7s" ;
    send.style.transform = "translate(0, -50%)"
    send.style.opacity = "1"
})

send.addEventListener('click', () => {
    input.style.transitionDelay = "0s" ;
    input.style.transform = "translateX(50%)"
    input.style.opacity = "0"

    send.style.transitionDelay = "0s"
    send.style.transform = "translate(-120%, -50%)"
    send.style.opacity = "0"

    // form.style.transitionDelay = "0.5s"
    form.style.width = '65%'

    thank.style.transitionDelay = "0.5s"
    thank.style.transform = "scale(1)"
    thank.style.opacity = "1"
})