function coopGlobalNav(input) {
  if (!input) return;

    var menuTrigger = $('.coop-c-nav__menu-trigger');
    var toggleTrigger = $('.js_nav-toggle');
    var toggleContent = $('.js_nav-toggle-content');
    var windowWidth = 960;

    menuTrigger.on('click', function (e) {
      // TODO: change to feature touch detection isTouchEnabled
      if (isSmallScreen()) {
        e.preventDefault()
      }
      closeAllToggle($(this))
      toggleMobileNav($(this))
      toggleTargetActive($(this))
    })

    function init() {
      bindEvents()
      addAria()
      initClickTracking()
    }
    function bindEvents() {

      var self = this

      this.toggleTrigger.on('click.coop-c-nav', function (e) {

        var $this = $(this)
        var isLevelOne = $this.children().hasClass('coop-c-nav__level-1')

        // if navItem is levelOne and on mobile or touch device, prevent top link
        if (isSmallScreen() || self.isTouchEnabled() && isLevelOne) {
          e.preventDefault()
        }

        // if both trigger and content are active and showing - toggle them
        if (hasClass('js-is--active') && $this.next().hasClass('js-is--open')) {
          // toggle current item clicked
          toggleCurrentNavItemActiveState($this)
        } else {
          // remove other active items and toggle $this one
          removeSiblingOrChildActiveStates($this)
          toggleCurrentNavItemActiveState($this)
        }

        //if mobile scroll animate to active navItem
        if (isSmallScreen()) {
          animateToActiveElement($this)
        }
      })

    }

    function removeSiblingOrChildActiveStates($this) {
      removeOthersActive($this)
      closeOtherToggles($this)
      removeOtherAriaExapanded($this)
      removeOtherAriaHidden($this)
    }
    function toggleCurrentNavItemActiveState($this) {
      toggleTargetActive($this)
      toggleContentShown($this)
      toggleAriaExpanded($this)
      toggleAriaHidden($this)
    }
    function animateToActiveElement($this) {
      // animate active element into view if window width under 960px
      $('html,body').animate({
        'scrollTop': $this.position().top
      }, 500)
    }
    function initClickTracking() {
      // insert click tracking for global nav on coop-co-uk
      /* Some quite specific things happening here for tracking on coop.co.uk
         and how we currently have some nav items labelled via ids and some not
         Also some tracking ids change between desktop and touch devices for toggles
         Needs an improved method of tracking using ensighten - not sure what yet!
      */
      var self = this
      $.each($('.coop-c-nav__link'), function (idx, el) {
        if (($(el).hasClass('js_nav-toggle') || $(el).parent().hasClass('js_nav-toggle')) && $(el).attr('id') !== 'cn_trigger_active_shop') {
          $(el).attr('id', function (_, elID) {
            if (self.isSmallScreen()) {
              return elID.replace(/cn_trigger_active_|cn_/, 'cn_trigger_active_')
            } else if (!self.isTouchEnabled()) {
              return elID.replace(/trigger_active_/, '')
            }
          })
        }
      })
    }
    function closeAllToggle($this) {
      $('.js_nav-toggle.js-is--active').not($this).removeClass('js-is--active')
      $('.js_nav-toggle-content.js-is--open').not($this.next()).removeClass('js-is--open')
    }
    function toggleMobileNav($this) {
      $('.coop-c-nav__list').toggleClass('js-is--open')
    }
    function toggleTargetActive($this) {
      $this.toggleClass('js-is--active')
    }
    function toggleContentShown($this) {
      $this.next().toggleClass('js-is--open')
    }
    function removeOthersActive($this) {
      $this.closest('.js_nav-toggle-content').find('.js_nav-toggle.js-is--active').removeClass('js-is--active')
    }
    function closeOtherToggles($this) {
      $this.closest('.js_nav-toggle-content.toggle-show').find('.js_nav-toggle-content.js-is--open').removeClass('js-is--open');
    }
    function addAria() {
      var self = this
      $.each(self.toggleTrigger, function (idx, el) {
        $(el).attr('aria-expanded', 'false')
      })
      $.each(self.toggleContent, function (idx, el) {
        $(el).attr('aria-hidden', 'true')
      })
    }
    function toggleAriaExpanded($this) {
      if ($this.attr('aria-expanded') === 'false') {
        $this.attr('aria-expanded', 'true')
      } else {
        $this.attr('aria-expanded', 'false')
      }
    }
    function removeOtherAriaExapanded($this) {
      // Find any same level or below expanded navitems and set expanded to false
      $this.closest('.js_nav-toggle-content').find('[aria-expanded="true"]').attr('aria-expanded', 'false')
    }
    function removeOtherAriaHidden($this) {
      // Find any same level or below aria-hidden="false" navitems and set aria-hidden="true"
      $this.closest('.js_nav-toggle-content').find('[aria-hidden="false"]').attr('aria-hidden', 'true')
    }
    function toggleAriaHidden($this) {
      if ($this.next().attr('aria-hidden') === 'true') {
        $this.next().attr('aria-hidden', 'false')
      } else {
        $this.next().attr('aria-hidden', 'true')
      }
    }
    function isTouchEnabled() {
      return (('ontouchstart' in window) ||
             (navigator.maxTouchPoints > 0) ||
             (navigator.msMaxTouchPoints > 0))
    }
    function isSmallScreen() {
      return window.innerWidth < 960
    }

}

export default coopGlobalNav;
