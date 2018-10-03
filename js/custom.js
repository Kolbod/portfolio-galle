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





  $(".otro").on('click', function(){
    $(".este").removeClass("active");
    $(".otro").addClass("active");
    });

    $(".este").on('click', function(){
      $(".otro").removeClass("active");
      $(".estre").addClass("active");
      });



    $(".huergo").mouseover(function(){
      $("remover").remove("remover");
      $(".exp-est-img").attr('src',"img/huergo.png");
      $(".text-block-est").append("<remover><h3>Industrial Institute Luis A. Huergo High School</h3><p><b>Electronic Technician with computer orientation  </b> March 2000 - January 2006</p><p><em>Completed</em></p></remover>");

      });

      $(".huergo").mouseleave(function(){
        $(".exp-est-img").attr('src',"img/wire.png");
        $("remover").remove("remover");
        });

        $(".repa").mouseover(function(){
          $("remover").remove("remover");
          $(".exp-est-img").attr('src',"img/repa.png");
          $(".text-block-exp").append("<remover><h3>Computers Repair and Assembly</h3><p>February 2004 - March 2007</p></remover>");

          });

          $(".repa").mouseleave(function(){
            $(".exp-est-img").attr('src',"img/wire.png");
            $("remover").remove("remover");
                        });

            $(".dv").mouseover(function(){
              $("remover").remove("remover");
              $(".exp-est-img").attr('src',"img/dv.png");
                $(".text-block-est").append("<remover><h3>Leonardo Da Vinci Institute</h3><p><b>Multimedia Designer</b>  March 2006 - March 2009</p><p><em>Completed</em></p><p><b>Animation Cinema Director</b> March 2009 - December 2012</p><p><em>Tesis Pending</em></p></remover>");
                $(".text-block-exp").append("<remover><h3>Leonardo Da Vinci Institute</h3><p><b>Professor in Multimedial Design Career & Animation Cinema Career</b></p><p><b>Modeling, Rendering, Rigging, Animation, Simulations</b> March 2012 - Current</p><p><em>https://www.davinci.edu.ar/</em></p></remover>");
                            });

              $(".dv").mouseleave(function(){
                $(".exp-est-img").attr('src',"img/wire.png");
                $("remover").remove("remover");
                });

                $(".lime").mouseover(function(){
                  $("remover").remove("remover");
                  $(".exp-est-img").attr('src',"img/lime.png");
                    $(".text-block-exp").append("<remover><h3>Lime Solutions</h3><p><b>Customer Care, Multimedial Designer, Website developer</b></p><p><b> Graphic Design, Action Script Games, 3D Team Leader</b></p><p><b>Motion Graphics</b> April 2008 - September 2012</p></remover>");
                  });

                  $(".lime").mouseleave(function(){
                    $(".exp-est-img").attr('src',"img/wire.png");
                    $("remover").remove("remover");
                    });

                    $(".mocap").mouseover(function(){
                      $("remover").remove("remover");
                      $(".exp-est-img").attr('src',"img/mocap.png");
                        $(".text-block-exp").append("<remover><h3>Getmotion</h3><p><b>Coordination, Motion Capture equipment operator</b></p><p><b> Equipment maintenance, Animation clean up</b> March 2012 - Current</p><p><em>https://www.getmotion.tv/</em></p></remover>");
                      });

                      $(".mocap").mouseleave(function(){
                        $(".exp-est-img").attr('src',"img/wire.png");
                        $("remover").remove("remover");
                        });

                        $(".freelo").mouseover(function(){
                          $("remover").remove("remover");
                          $(".exp-est-img").attr('src',"img/freelo.png");
                            $(".text-block-exp").append("<remover><h3>Freelancer</h3><p><b>Rigging, Animation, Architectural Rendering</b></p><p><b>Character and Props Modeling</b> February 2013 - Current</p></remover>");
                          });

                          $(".freelo").mouseleave(function(){
                            $(".exp-est-img").attr('src',"img/wire.png");
                            $("remover").remove("remover");
                            });

                            $(".exchange").mouseover(function(){
                              $("remover").remove("remover");
                              $(".exp-est-img").attr('src',"img/exchange.png");
                                $(".text-block-est").append("<remover><h3>Languajes</h3><p><b>Spanish - Native</b></p><p><b>English - Fluent</b><em> TOEFL 276/300, Rotary Club Rotary Exchange Student USA</em> - 2005 </p> </remover>");
                              });

                              $(".exchange").mouseleave(function(){
                                $(".exp-est-img").attr('src',"img/wire.png");
                                $("remover").remove("remover");
                                });



    // WOW ANIMATION
    new WOW().init();

})(jQuery);
