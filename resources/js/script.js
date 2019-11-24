$('.nav-projects').click(function() {
    $('html, body').animate({scrollTop: $('.projects').offset().top}, 1000);
})

$('.nav-about').click(function() {
    $('html, body').animate({scrollTop: $('.my-info').offset().top}, 1000);
})

$('.nav-home').click(function() {
    $('html, body').animate({scrollTop: $('header').offset().top}, 1000);
})




/*For sticky navigation*/
    $('.js-projects').waypoint(function(direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '40px'
    });

/*Mobile dropdown nav*/

    $('.mobile-icon').click(function() {
        var nav = $('.main-nav');
        nav.slideToggle(200);
              
    });