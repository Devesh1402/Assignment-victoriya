        
		/* owl corousel slider */
		$(document).ready(function () {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 5,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true
            });
        });

		
		/* smooth corousel slider */
        $(document).ready(function () {
            $('a[rel="relativeanchor"]').click(function () {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            });
        });