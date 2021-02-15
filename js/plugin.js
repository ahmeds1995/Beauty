$(function(){
    
    // Loading Page
    $(window).on("load",function(){

        $(".loading .sk-chase").fadeOut(4000,function(){

            $("body").css("overflow", "auto");

            $(this).parent().fadeOut(2000,function(){

                $(this).remove();
            });
        });
    });
    
    //Smoothly Scrolling To Sections
    $(".navbar .navbar-nav .nav-item .nav-link").on("click", function(){

         //Hide Menu Links After Clicking On The Link
        $(".navbar-collapse").removeClass("show");

        $("html, body").animate({

            scrollTop: $($(this).data("section")).offset().top
        },1200);
    });

    // Trigger Flexisel Plugin
    $("#flexiselDemo").flexisel({

        visibleItems: 4,
        itemsToScroll: 1,
        animationSpeed: 1000,         
        autoPlay: {
            enable: true,
            interval: 3000,
            pauseOnHover: true
        }        
    });

    // Show The Scroll To Top Btn And Make It Scroll To Top Of The Page
    let scrollToTopBtn = $(".scroll-to-top");
     $(window).on("scroll", function(){

        $(this).scrollTop() >= 500 ? $(".scroll-to-top").fadeIn(600):$(".scroll-to-top").fadeOut(600);
     });

     scrollToTopBtn.on("click",function(){

        $("html,body").animate({
            scrollTop: 0
        },1200);
     });

});