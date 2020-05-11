$(function(){
    // Typewrite
  ityped.init(document.querySelector("#ityped"), {
    strings: ['Welcome My Portfolio', 'Webサイトを作成します。']
})

// Skill fade
// フェードする前のcssを定義
$('.scroll-fade').css({
    opacity: 0,
    transform: 'translateY('+ effect_move +'px)',
    transition: effect_time + 'ms'
});

var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
var effect_move = 50; // どのぐらい要素を動かすか(px)
var effect_time = 500; // エフェクトの時間(ms) 1秒なら1000

//親要素と子要素のcssを定義
$('.scroll-fade-row').css({
    opacity: 0
});
$('.scroll-fade-row').children().each(function(){
    $(this).css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });
});

// スクロールまたはロードするたびに実行
$(window).on('scroll load', function(){
    var scroll_top = $(this).scrollTop();
    var scroll_btm = scroll_top + $(this).height();
    var effect_pos = scroll_btm - effect_btm;

    //エフェクトが発動したとき、子要素をずらしてフェードさせる
    $('.scroll-fade-row').each( function() {
        var this_pos = $(this).offset().top;
        if ( effect_pos > this_pos ) {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
            $(this).children().each(function(i){
                $(this).delay(100 + i*200).queue(function(){
                    $(this).css({
                        opacity: 1,
                        transform: 'translateY(0)'
                    }).dequeue();
                });
            });
        }
    });
});

// Page Top
$( () => {
    let topBtn = $('#page-top');

    topBtn.hide();
    
    $(window).scroll( () => {
        if ($(this).scrollTop() > 400) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    
    topBtn.click( () => {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// スクロール
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
 
        var target = this.hash;
        var $target = $(target);
 
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
        window.location.hash = target;
        });
    });


    // service
    $('.img-container').waypoint(function(direction){
        var activePoint = $(this.element);
        //scroll down
        if (direction === 'down') {
            activePoint.addClass('active');
        }
        else{
            activePoint.removeClass('active');
        }
    },{offset : '75%'});
     
    $('.text-container').waypoint(function(direction){
        var activePoint = $(this.element);
        //scroll down
        if (direction === 'down') {
            activePoint.addClass('active');
        }
        else{
            activePoint.removeClass('active');
        }       
    },{offset : '75%'});


    // Works slider
    var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2, //何枚表示するか
    spaceBetween: 0, //スライド間の距離
    initialSlide: 1, //最初に何枚目のスライドを表示するか
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
        },
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        },
        autoHeight: false,
    on: {
    slideChange: function () {
    jQuery('.swiper-slide-content').css('opacity', '0');
    realIndex = this.realIndex + 1;
    jQuery('.swiper-slide-content-' + realIndex).css('opacity', '1');
    },
},
    });

    // モーダル
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    }); 
});

// ドロワーメニュー
(function($) {
    $(function () {
      $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
      });
    });
})(jQuery);
