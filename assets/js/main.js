    // WOW JS
    new WOW().init();

    // Counter UP JS
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    // Magnific Popup Image JS
    $('.image-link').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
          }
    });

    // Magnific Popup Video JS
    $('.video-link').magnificPopup({
        type: 'iframe'
    });
    
    // One Page Nav
    $('#nav').onePageNav();

    // Owl Carousel JS
    $(".services-slider").owlCarousel({
        margin:20,
        loop:true,
        autoplay:true,
        nav:true,
        items:3,
        navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });