/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/chevron_left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/chevron_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });
  }); */
$(document).ready(function () {
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
/*
  $('.catalog-item__link').each(function(i){
    $(this).on('click', function(evt){
      evt.preventDefault();
      $('.catalog-item__forward').eq(i).toggleClass('catalog-item__forward_active');
      $('.catalog-item__back').eq(i).toggleClass('catalog-item__back_active');
    });
  }); */

function toggleForwardBack(item){
  $(item).each(function(i){
    $(this).on('click', function(evt){
      evt.preventDefault();
      $('.catalog-item__forward').eq(i).toggleClass('catalog-item__forward_active');
      $('.catalog-item__back').eq(i).toggleClass('catalog-item__back_active');
    });
  });
}

toggleForwardBack('.catalog-item__link');
toggleForwardBack('.catalog-item__return');


});

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {
    //   640: {
    //     edgePadding: 20,
    //     gutter: 20,
    //     items: 2
    //   },
    //   768: {
    //     gutter: 30
    //   },
    //   900: {
    //     items: 1
    //   }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});





/* let tabs = document.querySelectorAll('.catalog__tab');
let contents = document.querySelectorAll('.catalog__content');

let links = document.querySelectorAll('.catalog-item__link');
let returns = document.querySelectorAll('.catalog-item__return');
let backs = document.querySelectorAll('.catalog-item__back');
let forwards = document.querySelectorAll('.catalog-item__forward');


console.log(tabs, contents);

links.forEach((item, i) => {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    forwards[i].classList.remove('catalog-item__forward_active');
    backs[i].classList.add('catalog-item__back_active');
  });
});

returns.forEach((item, i) => {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    backs[i].classList.remove('catalog-item__back_active');
    forwards[i].classList.add('catalog-item__forward_active');
    
  });
});

tabs.forEach((item, i) => {
  item.addEventListener('click', function () {
    tabs.forEach((item) => {
      item.classList.remove('catalog__tab_active');
    });
    item.classList.add('catalog__tab_active');


    contents.forEach((item) => {
      item.classList.remove('catalog__content_active');
    });
    contents[i].classList.add('catalog__content_active');
  });
}); */