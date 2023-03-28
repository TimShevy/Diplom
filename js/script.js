// ===Бургер-меню====================

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

//===Mini PopUp========================
//===Переменные========================
let min_popUp = document.querySelector('.mini__wrapper__one')
let btnLogoNext = document.querySelector('.btnLogoNext')
let btnLogo = document.querySelectorAll('.cross__one__btn')
let min_popUp_two = document.querySelector('.mini__wrapper__two')
let close_popUp = document.querySelectorAll('.cross__one')

//=========Лисенеры Mini PopUp=========
btnLogo.forEach(btn => {
    btn.addEventListener('click', showMinPopUp)
})
btnLogoNext.addEventListener('click', showMinPopUp__two)

function showMinPopUp() {
    min_popUp.classList.add('active__min__popUp')
}
function showMinPopUp__two() {
    min_popUp.classList.remove('active__min__popUp')
    min_popUp_two.classList.add('active__min__popUp__thanks')
}

//===PopUp========================
//===Переменные===================
let wrapper__one = document.querySelector('.wrapper.one')
let btnPopUp__one = document.querySelectorAll('.btnPopUp')
let wrapper__two = document.querySelector('.wrapper.two')
let btnPopUp__two = document.querySelectorAll('.btnPopUp__two')
let wrapper__three = document.querySelector('.wrapper.three')
let btnPopUp__three = document.querySelectorAll('.btnPopUp__three')
let wrapper__four = document.querySelector('.wrapper.four')
let btnPopUp__four = document.querySelectorAll('.btnPopUp__four')
let finish__PopUp = document.querySelectorAll('.finishPopUp')
let confid__pol = document.querySelectorAll('.confid.pol')
let wrapper__political = document.querySelector('.wrapper__political')

//=========Лисенеры PopUp============
btnPopUp__one.forEach( btn => {
    btn.addEventListener('click', showPopUp)
})
btnPopUp__two.forEach( btn => {
    btn.addEventListener('click', showPopUp__next)
})
btnPopUp__three.forEach( btn => {
    btn.addEventListener('click', showPopUp__three)
})
btnPopUp__four.forEach( btn => {
    btn.addEventListener('click', showPopUp__four)
})
finish__PopUp.forEach( btn => {
    btn.addEventListener('click', finishPopUp)
})
confid__pol.forEach( btn => {
    btn.addEventListener('click', politicalPopUp)
})


//======Функции====================
function showPopUp() {
    wrapper__one.classList.add('active')
    progressBar_33()
}
function showPopUp__next() {
    wrapper__one.classList.remove('active')
    wrapper__two.classList.add('active')
    progressBar_66()
}
function showPopUp__three() {
    wrapper__two.classList.remove('active')
    wrapper__three.classList.add('active')
    progressBar_100()
}
function showPopUp__four() {
    wrapper__three.classList.remove('active')
    wrapper__four.classList.add('active')
    progressBar_100()
}
function finishPopUp() {
    wrapper__four.classList.remove('active')
}
function politicalPopUp() {
    wrapper__political.classList.add('active')
}
function progressBar_33() {
    let progress = document.querySelector('.progress.one')
    width = 1
    id = setInterval(progressStatus, 10)
    function progressStatus() {
        if(width >= 33) {
            clearInterval(id)
        } else {
            width++
            progress.style.width = width + '%'
        }
    }
}
function progressBar_66() {
    let progress = document.querySelector('.progress.two')
    width = 33
    id = setInterval(progressStatus, 10)
    function progressStatus() {
        if(width >= 66) {
            clearInterval(id)
        } else {
            width++
            progress.style.width = width + '%'
        }
    }
}
function progressBar_100() {
    let progress = document.querySelector('.progress.three')
    width = 66
    id = setInterval(progressStatus, 10)
    function progressStatus() {
        if(width >= 100) {
            clearInterval(id)
        } else {
            width++
            progress.style.width = width + '%'
        }
    }
}

close_popUp.forEach(btn => {
    btn.addEventListener('click', closeAllPopUp)
})
function closeAllPopUp() {
    min_popUp.classList.remove('active__min__popUp')
    min_popUp_two.classList.remove('active__min__popUp__thanks')
    wrapper__one.classList.remove('active')
    wrapper__two.classList.remove('active')
    wrapper__three.classList.remove('active')
    wrapper__four.classList.remove('active')
    wrapper__political.classList.remove('active')
}

// ===Слайдеры=========================
//карусель1
let splideF = new Splide( '.splide.first', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    snap: boolean = true,
    gap: '30px',
    breakpoints: {1280: {perPage: 2}, 640: {perPage: 1},}
});
splideF.mount();
//карусель2
let splideS = new Splide( '.splide.second', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    snap: boolean = true,
} );
splideS.mount();
// карусель3
let splideT = new Splide( '.splide.third', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    snap: boolean = true,
  } );
  splideT.mount();