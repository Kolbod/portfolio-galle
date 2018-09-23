(function ($)
 {

  "use strict";

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })

    $(".trigger").on('click', function(){
      new WOW().init();
  });




    // PARALLAX EFFECT
    $.stellar();


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });

//otro owlCarousel
$('.services-carousel').owlCarousel({
        autoplay: false,
    loop: false,
    margin: 150,
    dots: false,
    nav: false,
    items: 1,

    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 } },
URLhashListener:true,
      autoplayHoverPause:true,
      startPosition: 'URLHash'

  });

  $('.nuno').click(function(){
  $('.logo img').attr('src',"img/hablacorto.gif");
  setTimeout(function(){ $('.logo img').attr('src',"img/loop.gif"); }, 4000);

  });

  $('.ndos').click(function(){
  $('.logo img').attr('src',"img/loop.gif");

  });

  $('.ntres').click(function(){
  $('.logo img').attr('src',"img/hablacorto.gif");
  setTimeout(function(){ $('.logo img').attr('src',"img/loop.gif"); }, 4000);
  });

  $('.ncuatro').click(function(){
  $('.logo img').attr('src',"img/loop.gif");

  });

  $('.ncinco').click(function(){
  $('.logo img').attr('src',"img/hablalargo.gif");
  setTimeout(function(){ $('.logo img').attr('src',"img/loop.gif"); }, 6000);
  });









$(".este").on('click', function(){
  $(".otro").removeClass("active");
  $(".este").addClass("active");
  });


  $(".otro").on('click', function(){
    $(".este").removeClass("active");
    $(".otro").addClass("active");
    });



    // WOW ANIMATION
    new WOW().init();

})(jQuery);
