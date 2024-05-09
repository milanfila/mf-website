(function($){
    $(function(){
       /* Scroll to the section,
       when the user clicks on the link */
        $('.jq--scroll-o-mne').click(function(){
            $('html, body').animate({
                scrollTop: $(".jq--o-mne").offset().top
            }, 1000);
        });

        $('.jq--scroll-info').click(function(){
            $('html, body').animate({
                scrollTop: $(".jq--info").offset().top
            }, 1500);
        });

        $('.jq--scroll-reference').click(function(){
            $('html, body').animate({
                scrollTop: $(".jq--reference").offset().top
            }, 2000);
        });


        $('.jq--scroll-foto').click(function(){
            $('html, body').animate({
                scrollTop: $(".jq--foto").offset().top
            }, 2500);
        });

        $('.jq--scroll-zeptejte-se').click(function(){
            $('html, body').animate({
                scrollTop: $(".jq--zeptejte-se").offset().top
            }, 3000);
        });

        /* Scroll to the section,
        when the user clicks on the button */

        $('.jq--scroll-btn1').click(function () {
            $('html, body').animate({
                scrollTop: $(".jq--o-mne").offset().top
            }, 1000);
        });

        $('.jq--scroll-btn2').click(function () {
            $('html, body').animate({
                scrollTop: $(".jq--info").offset().top
            }, 1500);
        });

        $('.jq--scroll-btn3').click(function () {
            $('html, body').animate({
                scrollTop: $(".jq--reference").offset().top
            }, 2000);
        });

    });
})(jQuery);

