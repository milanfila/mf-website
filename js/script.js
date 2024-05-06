(function($){
    $(function(){
       /* Scroll to the section,
       when the user clicks on the link */
            $('a').click(function(){
                var section = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(section).offset().top
                }, 1000);
            });
    });
})(jQuery);

