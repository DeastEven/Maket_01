const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const tourImg = document.querySelector('.tour__img')
const tourBtn = document.querySelector('.tour__btn')
const likeImg = document.querySelector('.like__img')
const likeNumb = document.querySelector('.like__numb')
const listLike = document.querySelector('.item-list__like')
const likeImg2 = document.getElementById('like__img')
const likeNumb2 = document.getElementById('.like__numb')
const listLike2 = document.getElementById('.item-list__like')



burger.addEventListener('click', () => {
    burger.classList.toggle('active'),
        menu.classList.toggle('active')
});


tourBtn.addEventListener('click', () => {
    tourImg.classList.toggle('active')
});

likeImg.addEventListener('click', () => {
    likeImg.classList.toggle('active') ? likeNumb.innerHTML = `<p class=" like__numb">22</p>` : likeNumb.innerHTML = `<p class=" like__numb">21</p>`;


    listLike.append(likeNumb)
})


likeImg2.addEventListener('click', () => {
    likeImg2.classList.toggle('active') ? likeNumb2.innerHTML = `<p class=" like__numb" id="like__numb">14</p>` : likeNumb2.innerHTML = `<p class=" like__numb" id="like__numb">13</p>`;


    listLike2.append(likeNumb2)
})


new Swiper('.rev__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,

    autoHeight: true,

    autoplay: {
        dalay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
