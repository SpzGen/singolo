const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('submit-button');
const CLOSE_BUTTON = document.getElementById('close-button');
const ARRAY_BUTTON = document.getElementById('button-array');
const GALLERY = document.getElementById('gallery_array');
const BUTTON_ALL = document.getElementById('button-All');
const BUTTON_WEB_DESING = document.getElementById('button-Web_Design');
const BUTTON_GRAPHIC_DESIGN = document.getElementById('button-Graphic_Design');
const BUTTON_ARTWORK = document.getElementById('button-Artwork');
const BUTTON_SLIDER_LEFT = document.getElementsByClassName('chev-h');
const Random = (a, b) => Math.random()-0.5;

// Скрол документа

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('body > div');
    const links = document.querySelectorAll('#main-nav a');

    divs.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active-nav');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active-nav'); 
                }
            })
        }
    });
}



// Подсветка меню
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active-nav'));
    event.target.classList.add('active-nav');
});

// Кнопки слайдера
let SlideId = 1;
showSliders(SlideId);

function Click_b(n) {
    showSliders (SlideId += n);
}

function showSliders(n) {
    ARRSLIDES = document.getElementsByClassName('slide');
    SliderCSS = document.querySelector('.slider');
    if (n > ARRSLIDES.length) {
        SlideId = 1;
    }
    if (n < 1) {
        SlideId = ARRSLIDES.length;
    }
    for (let i = 0; i < ARRSLIDES.length; i++) {
        ARRSLIDES[i].style.display = "none";
    }
    ARRSLIDES[SlideId-1].style.display = "";
    if (ARRSLIDES[1].style.display === "") {
        SliderCSS.classList.add('slider2');
    } else {
        SliderCSS.classList.remove('slider2');
    }
};

// Кнопки выключения телефона
function button_IPhone(n) {
    if (n === 1) {
        if (document.querySelector('.Screen-v').classList.toggle('display-off')) {
            document.querySelector('.Screen-v').classList.add('display-off');
        } else {
            document.querySelector('.Screen-v').classList.remove('display-off');
        }
    } else {
        if (document.querySelector('.Screen-h').classList.toggle('display-off')) {
            document.querySelector('.Screen-h').classList.add('display-off');
        } else {
            document.querySelector('.Screen-h').classList.remove('display-off');
        }
    }
};


// Подсветка кнопок галереи
ARRAY_BUTTON.addEventListener('click', (event) => {
    ARRAY_BUTTON.querySelectorAll('button').forEach(el => el.classList.remove('button_active'));
    event.target.classList.add('button_active');
});

// Сортировка РАНДОМОМ
BUTTON_ALL.addEventListener('click', () => {
    if(!(event.target.classList.contains('button_active'))){
        let arrImg = Array.from(GALLERY.getElementsByTagName('img'));
        let arrImgSrcMix = arrImg.map(e => e.src).sort(Random);
        arrImg.map((e, i) => e.src = arrImgSrcMix[i]);
    }
});

// Сортировка РАНДОМОМ
BUTTON_WEB_DESING.addEventListener('click', () => {
    if(!(event.target.classList.contains('button_active'))){
        let arrImg = Array.from(GALLERY.getElementsByTagName('img'));
        let arrImgSrcMix = arrImg.map(e => e.src).sort(Random);
        arrImg.map((e, i) => e.src = arrImgSrcMix[i]);
    }
});

// Картинки двигаются назад по 1
BUTTON_GRAPHIC_DESIGN.addEventListener('click', () => {
    if(!(event.target.classList.contains('button_active'))){
        let arrImg = Array.from(GALLERY.getElementsByTagName('img'));
        let arrImgSrc = arrImg.map(e => e.src)
        let arrImgSrcCut = arrImgSrc.shift();
        let arrImgSrcNew = arrImgSrc.concat(arrImgSrcCut);
        arrImg.map((e, i) => e.src = arrImgSrcNew[i]);
    }
});

// Картинки двигаются вперед по 1
BUTTON_ARTWORK.addEventListener('click', () => {
    if(!(event.target.classList.contains('button_active'))){
        let arrImg = Array.from(GALLERY.getElementsByTagName('img'));
        let arrImgSrc = arrImg.map(e => e.src)
        let arrImgSrcCut = arrImgSrc.pop().split();
        let arrImgSrcNew = arrImgSrcCut.concat(arrImgSrc);
        arrImg.map((e, i) => e.src = arrImgSrcNew[i]);
    }
});

// Подсветка картинок гарелеи
GALLERY.addEventListener('click', (event) => {
    if(!(event.target.classList.contains('active-gallery'))){
        GALLERY.querySelectorAll('img').forEach(el => el.classList.remove('active-gallery'));
        event.target.classList.add('active-gallery');
    } else {
        event.target.classList.remove('active-gallery');
    }
});

//Кнопка формирования модального окна
BUTTON.addEventListener('click', () => {
    if (document.getElementById('contact-name').value.toString() != '' && document.getElementById('contact-email').value.toString() != '') {
        const name = document.getElementById('contact-name').value.toString();    
        const subject = document.getElementById('contact-subject').value.toString();
        const comment = document.getElementById('contact-comment').value.toString();
        
        document.getElementById('result_name').innerText = name;
        document.getElementById('message-block').classList.remove('hidden');

        if (document.getElementById('contact-subject').value.toString() != '') {
            document.getElementById('result_subject').innerText = subject;
            } else {
            document.getElementById('result_subject').innerText = 'Без темы';
        }

        if (document.getElementById('contact-comment').value.toString() != '') {
            document.getElementById('result_comment').innerText = comment;
            } else {
            document.getElementById('result_comment').innerText = 'Без темы';
        }
    event.preventDefault();
    }
});

// Кнопка закрытия на модальном окне
CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('result_subject').innerText = '';
    document.getElementById('contact-comment').innerText = '';   
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('forms').reset();
});



