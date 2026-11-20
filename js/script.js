function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};
include('js/jquery.cookie.js');
include('js/jquery.easing.1.3.js');;
(function($) {
    if (isIE() && isIE() < 11) {
        include('js/pointer-events.js');
        $('html').addClass('lt-ie11');
        $(document).ready(function() {
            PointerEventsPolyfill.initialize({});
        });
    }
})(jQuery);;
(function($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');
        $(document).ready(function() {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);;
(function($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');
        $(document).ready(function() {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa-angle-up'
            });
        });
    }
})(jQuery);;
(function($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);;
(function($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function() {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);;
(function($) {
    include('js/superfish.js');
})(jQuery);;
(function($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);;
(function($) {
    var o = $('html');
    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');
            $(document).ready(function() {
                new WOW().init();
            });
        }
    }
})(jQuery);;
/*(function($) {
    include('js/mailform/jquery.form.min.js');
    include('js/mailform/jquery.rd-mailform.min.js');
})(jQuery);;*/
(function($) {
    var o = $('#camera');
    if (o.length > 0) {
        if (!(isIE() && (isIE() > 9))) {
            include('js/jquery.mobile.customized.min.js');
        }
        include('js/camera.js');
        $(document).ready(function() {
            o.camera({
                autoAdvance: true,
                height: '46.2926%',
                minHeight: '350px',
                pagination: false,
                thumbnails: false,
                playPause: false,
                hover: false,
                loader: 'none',
                navigation: true,
                navigationHover: false,
                mobileNavHover: false,
                fx: 'simpleFade'
            })
        });
    }
})(jQuery);;
(function($) {
    include('js/jquery.rd-parallax.js');
})(jQuery);;
(function($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include('js/jquery.touch-touch.js');
        $(document).ready(function() {
            o.touchTouch();
        });
    }
})(jQuery);
$(function() {
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,
        gestureStart = function() {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },
        scaleFix = function() {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };
    scaleFix();
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function() {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(function() {
                        return false;
                    }, function() {
                        window.location.href = $(this).attr("href");
                    });
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}

/* Call Now / Book Now floating buttons (all pages) */
(function($) {
    $(document).ready(function() {
        if ($('.cta-fixed').length) return;
        var bookUrl = 'https://book.squareup.com/appointments/fww1xcostv9bk4/location/EG2BW60FEZVPB/services?gei=flW-Zv7tNo7kwN4PlYfcwQg&hl=en-US&rwg_token=AJKvS9XV79kli-tV1J1MzNUzfPPv4EjvS1fsJ-mzeedt18PYN6dD6rOgRRl5-cvJuLEUO9nd5y562_aJNDrqM02CdQKCeQWfvw%3D%3D';
        $('body').append(
            '<div class="cta-fixed">' +
            '<a class="cta cta-call" href="tel:+14056986581"><span class="fa-phone"></span> Call Now</a>' +
            '<a class="cta cta-book" href="' + bookUrl + '">Book Now</a>' +
            '</div>'
        );
    });
})(jQuery);
