

jQuery(document).ready(function($) {

        // PRELOADER
      $(window).on('load', function(){
          var preload = function(){
              var tl = new TimelineMax();
    
              var preloader = $('.preloader');
                  page = $('html') 
                  preloaderLogo = $('.preloader__logo')
                  headLogo = $('.head__logo');
                  loadHide = $('.load-hide');
                  loadShow1 = $('.load-show-1s');
                  loadShow2 = $('.load-show-2s');
                  loadShow3 = $('.load-show-3s');
    
    
              tl.to( preloader, 2, {delay: 2, y:'-100%', height: 0, ease: Expo.easeInOut},)
                    .to( preloaderLogo, 1, {opacity: 0, ease: Expo.easeInOut},"-=3")
                    .from( headLogo, 2, {opacity: 0, ease: Expo.easeInOut},"-=1.5")
              
    
                  .from( loadShow1, 1, {opacity: 0, y:'-5%', ease: Expo.easeInOut})
                  .from( loadShow2, 1.5, {delay: 1, opacity: 0, y:'-5%', ease: Expo.easeInOut},"-=1.5")
                  .from( loadShow3, 1.5, {delay: 1 ,opacity: 0, y:'-1%', ease: Expo.easeInOut},"-=1.5")
                  
                  .to  ( loadHide, 1, {opacity: 0, ease: Expo.easeInOut})
          }
          preload();
      });



      // SCROLL-LINE
        $(window).scroll(function () {
            var wintop = $(window).scrollTop(),
                docheight =

                $(document).height(),
                winheight = $(window).height();
            var scrolled = (wintop / (docheight - winheight)) * 100;

            $('.header__scroll').css('width', (scrolled + '%'));
        });

        // CURSOR
        // CURSOR-VIEW-PAGE
    //     var cursor = $(".cursor"),
    //     follower = $(".cursor-follower");

    //     var posX = 0,
    //         posY = 0,
    //         mouseX = 0,
    //         mouseY = 0;

    //     TweenMax.to({}, 0.016, {
    //         repeat: -1,
    //         onRepeat: function () {
    //             posX += (mouseX - posX) / 2;
    //             posY += (mouseY - posY) / 2;

    //             TweenMax.set(follower, {
    //                 css: {
    //                     left: posX - 20,
    //                     top: posY - 20
    //                 }
    //             });

    //             TweenMax.set(cursor, {
    //                 css: {
    //                     left: mouseX,
    //                     top: mouseY
    //                 }
    //             });
    //         }
    //     });

    //   $(document).on("mousemove", function (e) {
    //       mouseX = e.pageX;
    //       mouseY = e.pageY;
    //   });

    //   $(".view").on("mouseenter", function () {
    //       cursor.addClass("active");
    //       follower.addClass("active");
    //   });

    //   $(".view").on("mouseleave", function () {
    //       cursor.removeClass("active");
    //       follower.removeClass("active");
    //   });
      
      $('.burger').click(function() {
          $(this).toggleClass('burger_active');
          $('.header__menu').toggleClass('header__menu_active');
      })

      $('.burger-network').click(function() {
        $(this).toggleClass('burger-network_active');
        $('.social-network').toggleClass('visually-hidden');
      })


});

