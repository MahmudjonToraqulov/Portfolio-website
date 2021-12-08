$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    })

    //toggle/menu navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    //typing animate
    let typed = new Typed(".typing", {
        strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //typing animate
    let typed2 = new Typed(".typing-2", {
        strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: 2000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});