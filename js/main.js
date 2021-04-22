// ----------- main ----------

// Бургер в хедере
var controlBurger = document.querySelector(".control__burger");
var mobileBurger = document.querySelector(".mobile__burger");
var menuBurger = document.querySelector(".desctop__btn")
var menuBurgerMobile = document.querySelector(".desctop__btn--mobile")
var desctopMenu = document.querySelector(".desctop-menu");

controlBurger.addEventListener("click", function(){
    desctopMenu.classList.add('desctop-menu--active');
})

mobileBurger.addEventListener("click", function(){
    desctopMenu.classList.add('desctop-menu--active');
})

menuBurger.addEventListener("click", function(){
    desctopMenu.classList.remove('desctop-menu--active');
})

menuBurgerMobile.addEventListener("click", function(){
    desctopMenu.classList.remove('desctop-menu--active');
})


// Фиксируем шапку
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});


// $(document).ready(function(){
    
    $.fancybox.defaults.backFocus = false;

    // Карусель
    $('.hero__carousel').owlCarousel({
        mouseDrag: false,
        touchDrag: true,
        center: true,
        loop:true,
        nav:true,
        pagination: true,
        responsive:{
            0:{
                items:3,
            },
            1025:{
                items:5,
            }
        }
    })

    // Карусель
    $('.products__tablet').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            426:{
                items:3
            }
        }
    })

// });


// ----------- card ----------


// Выбор размера
var cardSize = document.querySelector(".sizes__list");

if(cardSize){
    cardSize.addEventListener("click", changeActiveSize);
 
    function changeActiveSize(event) {
        if (event.target.classList.contains("sizes__item")) {
          for (i = 0; i < cardSize.children.length; i++) {
              cardSize.children[i].classList.remove("sizes__item--active");
          }
          event.target.classList.add("sizes__item--active");
        }
    }
}


// Выбор роста
var cardHeight = document.querySelector(".card__height-list");

if(cardHeight){
    cardHeight.addEventListener("click", changeActiveHeight);
 
    function changeActiveHeight(event) {
        if (event.target.classList.contains("height__item")) {
          for (i = 0; i < cardHeight.children.length; i++) {
              cardHeight.children[i].classList.remove("height__item--active");
          }
          event.target.classList.add("height__item--active");
        }
    }
}


// Выбор цвета
var colorsSelector = document.querySelector(".color__wrap");

if(colorsSelector){
    colorsSelector.addEventListener("click", choiceColor);
 
    function choiceColor(event) {
        if (event.target.classList.contains("color")) {
          for (i = 0; i < colorsSelector.children.length; i++) {
            colorsSelector.children[i].classList.remove("color--active");
          }
          event.target.classList.add("color--active");
        }
    }
}


// Аккордеон в card

const accordeonTitle = document.querySelectorAll('[data-name="accordeon-title"]');

accordeonTitle.forEach(function (item) {
    item.addEventListener('click', showAccordeon);
});

function showAccordeon() {
    this.classList.toggle('show');
    let loock = this.nextElementSibling;
    if (loock.style.maxHeight){
    loock.style.maxHeight = null;
    } else {
        loock.style.maxHeight = loock.scrollHeight + "px";
    }
}

const ratingCard = document.querySelectorAll('.accordeon__item');
if(ratingCard) {
    for (let card of ratingCard) {
        const cardLearnMoreBtn = card.querySelector('.accordeon__title');
        const learnMore = card.querySelector('.accordeon__content');
        const learnMoreImg = card.querySelector('.accordeon__title-img');

        cardLearnMoreBtn.addEventListener('click', function(){
            learnMore.classList.toggle('accordeon__content--active');
            learnMoreImg.classList.toggle('accordeon__title-img--active');
        })
    }
}

// Модалка размеров
var sizeModalOpen = document.querySelector(".card__size-table");
var sizeModalClose = document.querySelector(".size__modal-close");
var sizeModal = document.querySelector(".card__size-modal-wrap");

if(sizeModalOpen){
    sizeModalOpen.addEventListener("click", function(){
        sizeModal.classList.add("card__size-modal-wrap--active");
    });
}

if(sizeModalClose){
    sizeModalClose.addEventListener("click", function(){
        sizeModal.classList.remove("card__size-modal-wrap--active");
    });
 
 
}


// Модалка покупки
var cartModalOpen = document.querySelector(".btn__card");
var cartModalClose = document.querySelector(".cart__modal-close");
var cartModal = document.querySelector(".card__cart-modal-wrap");

if(cartModalOpen){
    cartModalOpen.addEventListener("click", function(){
        cartModal.classList.add("card__cart-modal-wrap--active");
    });
}

let price = document.querySelector(".price");
let counterValue = document.querySelector(".counter__value");
let counterSpan = document.querySelectorAll(".counter span");
let infoPrice = document.querySelector(".info-price");


counterSpan.forEach(function (item, i) {
    item.addEventListener("click", function () {
        if (item.innerHTML == "-" && counterValue.innerHTML > 1) {
            counterValue.innerHTML = +counterValue.innerHTML - 1;
        }
        if (item.innerHTML == "+") {
            counterValue.innerHTML = +counterValue.innerHTML + 1;
        }
        infoPrice.innerHTML = parseFloat(price.innerHTML) * counterValue.innerHTML + "₽";
    });
});


if(cartModalClose){
    cartModalClose.addEventListener("click", function(){
        cartModal.classList.remove("card__cart-modal-wrap--active");
    });
}


//also карусель
$(document).ready(function(){
    var alsoCarousel = $(".also__carousel");

    function alsoCarouselInit() {
        if($('body').children(alsoCarousel) && $(window).width() <= 768){
            alsoCarousel.owlCarousel({
                margin: 10,
                loop: true,
                nav: true,
                pagination: false,   
                dots: false,
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:1
                    },
                    418: {
                        items: 3  
                    }
                }
            });
        } else {
            alsoCarousel.trigger('destroy.owl.carousel');
        }
    };

    alsoCarouselInit()
    $(window).resize(function(){
        alsoCarouselInit()
    });
}); 

// Добавляем рамку к миниатюрам при клике
var cardSliderMin = document.querySelector(".card__slider-min");

if(cardSliderMin){
    cardSliderMin.addEventListener("click", changeBorder);

    function changeBorder(event) {
        if (event.target.classList.contains("slider-min__item")) {
        for (i = 0; i < cardSliderMin.children.length; i++) {
            cardSliderMin.children[i].classList.remove("slider-min__item--active");
        }
        event.target.classList.add("slider-min__item--active");
        }
    }

}


// Синхронизированные слайдеры в card__right
$('.card__slider-big').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.card__slider-min',
    vertical: true,
    swipe: false,
    responsive: [
	    {
	      breakpoint: 1065,
	      settings: {
	        slidesToShow: 1,
            arrows: true,
            verticalSwiping: true,
            swipe: true,
            prevArrow: '<div class="card__slider-prev"></div>',
            nextArrow: '<div class="card__slider-next"></div>',
	      }
	    }
    ]
});
  
$('.card__slider-min').slick({
    slidesToShow: 4,
    asNavFor: '.card__slider-big',
    vertical: true,
    focusOnSelect: true,
});
  
$(window).on('resize orientationchange', function() {
    if ($(window).width() > 1200) {
      $('.card__slider-min').slick('unslick');
      $('.card__slider-min').slick({
        slidesToShow: 4,
        asNavFor: '.card__slider-big',
        vertical: true,
        focusOnSelect: true,
      });
    }
});

// Выпадающий список размеров
var size = $(".sizes__list--mobile");
var sizeList = $('.size__list');
var sizeBtn = $('.size-btn');
var sizeCurrent = $('.size-current__elem');

sizeBtn.click(function(e){
    sizeList.fadeToggle();
    $(this).toggleClass('isactive')
});

sizeList.on('click', '.size__elem', function(){
    var th = $(this);
    var thText = th.text();
    sizeCurrent
    .text(thText)
    .attr('href', 'sizes__list--mobile:'+thText+'');
    sizeList.fadeOut();
    sizeBtn.removeClass('isactive');
});

$(document).mouseup(function (e){
    if (!size.is(e.target)
    && size.has(e.target).length === 0) {
        sizeList.fadeOut();
        sizeBtn.removeClass('isactive');
    }
});

// var dataWrap = document.querySelectorAll(".bday__wrap");

// ratingCard.forEach(function(item) {
//     var addBtn = item.querySelector(".card__add-block");
//     var textBtn = item.querySelector(".card__add-block-btn");
//     var imgBtn = item.querySelector(".card__arrow");
//     var imgBtnWhite = item.querySelector(".card__arrow--white");
//     var addContent = item.querySelector(".card__add-wrap");
//     var addBtnClose = item.querySelector(".add__arrow")

//     addBtn.addEventListener("click", function(){

//         imgBtn.classList.toggle("card__arrow-active");
//         imgBtnWhite.classList.toggle("card__arrow-active")
//         addContent.classList.toggle("hidden");

//     });

//     addBtnClose.addEventListener("click", function(){
//         addContent.classList.add("hidden")
//     })
// })

// ---------- personal-area ---------

// выпадающий список дней 
var bday = $(".bday__list-wrap");
var bdayList = $('.bday__list');
var bdayBtn = $('.bday-btn');
var bdayCurrent = $('.bday-current__elem');

bdayBtn.click(function(e){
    bdayList.fadeToggle();
    $(this).toggleClass('bday-isactive')
});

bdayList.on('click', '.bday__elem', function(){
    var th = $(this);
    var thText = th.text();
    bdayCurrent
    .text(thText)
    .attr('href', 'bday__list-wrap:'+thText+'');
    bdayList.fadeOut();
    bdayBtn.removeClass('bday-isactive');
});

$(document).mouseup(function (e){
    if (!bday.is(e.target)
    && bday.has(e.target).length === 0) {
        bdayList.fadeOut();
        bdayBtn.removeClass('bday-isactive');
    }
});

// personal-history 
// aккордеон
const ordersItemTitle = document.querySelectorAll('[data-name="orders__item-title"]');

ordersItemTitle.forEach(function (item) {
    item.addEventListener('click', showOrdersItem);
});

function showOrdersItem() {
    this.classList.toggle('show');
    let loock = this.nextElementSibling;
    if (loock.style.maxHeight){
    loock.style.maxHeight = null;
    } else {
        loock.style.maxHeight = loock.scrollHeight + "px";
    }
}


// --------- catalog ---------
// аккордеон в боковом меню
const sideItemTitle = document.querySelectorAll('[data-name="side-title"]');

sideItemTitle.forEach(function (item) {
    item.addEventListener('click', showSideItem);
});

function showSideItem() {
    let lock = this.nextElementSibling;
    if (lock.style.maxHeight){
    lock.style.maxHeight = null;
    } else {
        lock.style.maxHeight = lock.scrollHeight + "px";
    }
}

// catalog
var catalogBtn = document.querySelector(".catalog__btn");
var catalogSide = document.querySelector(".catalog__side");
var catalogSideBtn = document.querySelector(".catalog__side-btn")
catalogBtn.addEventListener("click", function(){
    catalogSide.classList.toggle('catalog__side--active');
})

catalogSideBtn.addEventListener("click", function(){
    catalogSide.classList.toggle('catalog__side--active');
})
