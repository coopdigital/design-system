/**
 * Toggles module
 *
 * Progressive content reveal.
 *
 * Usage:
<a href="#target" data-toggle>Trigger</a>
<div id="target">Target content</div>
 *
 * Options:
<a href="#target" data-toggle data-toggle-text-selector=".text" data-toggle-text-open="Close">
  <span class="text">Open</span>
</a>
<div id="target">Target content</div>
 */

(function() {
  'use strict';

  window.Coop = window.Coop || { Modules: {} };

  var selector = '[data-toggle], .toggle-trigger';

  var Toggles = function($el, options) {
    this.init($el, options);
    return this;
  };

  Toggles.prototype = {
    init: function($el, options) {
      this.$trigger = $el;
      this.$target = $($el.attr('href'));
      this.$textContainer = $($el.data('toggle-text-selector') || $el).eq(0);

      $el.data('toggle-target', this.$target);
      $el.data('toggle-text-container', this.$textContainer);

      if ($el.attr('data-toggle-text-closed')) {
        $el.data('toggle-text-open', this.$textContainer.text());
      }
      if ($el.attr('data-toggle-text-open')) {
        $el.data('toggle-text-closed', this.$textContainer.text());
      }

      this.addARIA();
      this.bindEvents();

      $el.add(this.$target).addClass('init');
    },
    addARIA: function() {
      if (!this.$trigger.is('button')) {
        this.$trigger.attr('role', 'button');
      }
      this.$trigger
        .attr('aria-controls', this.$target.attr('id'))
        .attr('aria-expanded', 'false');

      this.$target
        .attr('aria-hidden', 'true')
        .attr('tabindex', '-1')
        .attr('aria-live', 'polite');
    },
    bindEvents: function() {
      var self = this;

      this.$trigger
        .off('click.Toggles')
        .on('click.Toggles', function(e) {
          e.preventDefault();
          self.toggle($(this));
        });
    },
    getTarget: function($el) {
      return $el.data('toggle-target');
    },
    toggle: function() {
      if (this.$trigger.hasClass('is--open')) {
        this.close(this.$trigger);
      }
      else {
        this.open();
      }
    },
    open: function() {
      var self = this;

      this.$trigger.add(this.$target).addClass('is--open');

      this.$trigger.attr('aria-expanded', 'true');
      this.$target.attr('aria-hidden', 'false');

      if (this.$trigger.data('toggle-text-open')) {
        this.$textContainer.text(this.$trigger.data('toggle-text-open'));
      }

      if (this.$trigger.parent().hasClass('accordion')) {
        this.$trigger.siblings(selector).each(function() {
          self.close($(this));
        });
      } 
    },
    close: function($el) {
      var $target = this.getTarget($el);
      $el.add($target).removeClass('is--open');

      $el.attr('aria-expanded', 'false');
      $target.attr('aria-hidden', 'true');

      if ($el.data('toggle-text-closed')) {
        $el.data('toggle-text-container').text($el.data('toggle-text-closed'));
      }
    }
  };

  Coop.Modules._Toggles = Toggles;

  Coop.Modules.Toggles = {
    init: function() {
      return $(selector).each(function() {
        $(this).data('Toggles', new Toggles($(this), $(this).data()));
      });
    }
  };
}());
