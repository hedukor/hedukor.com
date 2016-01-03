$(function() {
    "use strict";




    /* ==========================================================================
       Countdown timer 
       ========================================================================== */


    $('#clock').countdown('2016/12/30 12:34:56') //Change time here. Time format 'y/m/d  h/m/s' 
        .on('update.countdown', function(event) {
            var format = '%H:%M:%S';
            if (event.offset.days > 0) {
                format = '%-d day%!d ' + format;
            }
            if (event.offset.weeks > 0) {
                format = '%-w week%!w ' + format;
            }
            $(this).html(event.strftime(format));
        })
        .on('finish.countdown', function(event) {
            $(this).html('Registration are closed!')
                .parent().addClass('disabled');

        });




    /* ==========================================================================
       Sub Form   
       ========================================================================== */


    $('#mc-form').ajaxChimp({
        callback: callbackFunction,
        url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
            // http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });

    function callbackFunction(resp) {
        if (resp.result === 'success') {
            $('#mc-error').slideUp();
            $('#mc-success').slideDown();
        } else if (resp.result === 'error') {
            $('#mc-success').slideUp();
            $('#mc-error').slideDown();
        }
    }




    /* ==========================================================================
       CTA number animation
       ========================================================================== */


    $('.cta').waypoint(function() {

        $('.total-number').animateNumber({
            number: 800, //change value here
            color: '#FF4C4C'
        }, 4000);

        this.destroy();

    }, {
        offset: '70%'

    });



    /* ==========================================================================
       Share button 
       ========================================================================== */

    $("#share").jsSocials({
        showCount: false,
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest"], // add/remove social network
        url: "http://csmthemes.com/themes/webi", // http://url.to.share
        text: "Webi - Webinar Landing Page" // text to share
    });


    /* ==========================================================================
       Counter number animation
       ========================================================================== */


    $('.counter').waypoint(function() {



        $('.total-number-1').animateNumber({
            number: 100, //change value here

        }, 2000);

        $('.total-number-2').animateNumber({
            number: 5000, //change value here

        }, 2000);

        $('.total-number-3').animateNumber({
            number: 1200, //change value here

        }, 2000);

        $('.total-number-4').animateNumber({
            number: 1500, //change value here

        }, 2000);

        this.destroy();

    }, {
        offset: '80%'

    });



    /* ==========================================================================
   Tweet
   ========================================================================== */


    $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} {{user_name}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');

        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 5000);
    });




    /* ==========================================================================
       video slider 
       ========================================================================== */

    $('.video .flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false
    });



    /* ==========================================================================
       review slider 
       ========================================================================== */

    $('.reviews .flexslider').flexslider({
        animation: "fade",
        controlNav: false,
        slideshow: true,
        slideshowSpeed: 4000,
        directionNav: false
    });




    /* ==========================================================================
       Navbar button animation
       ========================================================================== */


    $('#toggle, .overlay-menu a').on("click", function() {



        var btnCon = $(".button-container");
        if ($(btnCon).hasClass('active')) {
            $(btnCon).removeClass('active');
        } else {

            $(btnCon).addClass('active');
        }


        $('#overlay').toggleClass('open');
    });


    /* ==========================================================================
       Navbar button change color on scroll
       ========================================================================== */


    $('.agenda').waypoint(function(direction) {
        if (direction === 'down') {
            $('.button-container span').css("background-color", "rgb(97, 101, 113)");
        } else {
            $('.button-container span').css("background-color", "white");
        }


    });


    /* ==========================================================================
       Parallax
       ========================================================================== */




    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (!isMobile.any()) {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 0,
            responsive: true
        });
    }


    /* ==========================================================================
       Ios background attactment fix
       ========================================================================== */


    var classNames = [];
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
        classNames.push('device-ios');
    }


    var html = document.getElementsByTagName('html')[0];


    if (html.classList) {
        html.classList.add.apply(html.classList, classNames);
    }



    /* ==========================================================================
       Smooth scroll
       ========================================================================== */

    $('a[href*=#]:not([href=#]):not(.panel-title a)').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });




});