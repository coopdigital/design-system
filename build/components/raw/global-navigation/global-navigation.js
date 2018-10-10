

    //on click
        // check if sibiling has class toggle-show
	$('.coop-nav__trigger').click(function() {
    	$('.coop-nav__list').toggleClass('toggle-show');
        $('.coop-nav__trigger').toggleClass('active');
    });

	$('.coop-nav__link-wrap').click(function() {
        closeOtherLvl2($(this));
        $(this).next('.coop-nav__leveltwo').toggleClass('toggle-show');
        $(this).toggleClass('active');
   	});

  	$('.levelthree-trigger').click(function() {
        var $this = $(this),
            $elToCloseSelector = '.coop-nav__levelthree',
            classToRemove;

        closeOtherLvl3($this);
        //toggle these active and shown
        //toggleThisMenu($this, $this.next('.coop-nav__levelthree'))
        $(this).next($elToCloseSelector).toggleClass('toggle-show');
        $(this).toggleClass('active');
   	});



    //These two functions do the same thing, we can make into one func on next push
    function closeOtherLvl3($this) {
        $thisNext = $this.next('.coop-nav__levelthree');
        $('.levelthree-trigger').not($this).removeClass('active');
        $('.coop-nav__levelthree').not($thisNext).removeClass('toggle-show');
    }

    function closeOtherLvl2($this){
        /*close all other open lvl3navs if any and remove active classes
        from other lvl3triggers that aren't related to this one.*/
        $thisNext = $this.next('.coop-nav__leveltwo');
        $('.coop-nav__link-wrap').not($this).removeClass('active');
        $('.coop-nav__leveltwo').not($thisNext).removeClass('toggle-show');
    }
