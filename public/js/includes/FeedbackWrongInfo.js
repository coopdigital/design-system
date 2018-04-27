(function() {
  'use strict';

  window.Coop = window.Coop || { Modules: {} };

  var selector = '[data-feedback-wrong-info]';

  var FeedbackWrongInfo = function($el) {
    this.init($el);
    return this;
  };

  FeedbackWrongInfo.prototype = {
    defaults: {
      email: window.DOORBELL_EMAIL,
      doorbellId: window.DOORBELL_ID,
      doorbellKey: window.DOORBELL_KEY
    },
    init: function($el) {
      this.$link = $el;
      this.pk = this.$link.data('feedback-wrong-info');
      this.$feedbackPanel = $('#store-feedback-' + this.pk);

      this.bindEvents();
    },
    bindEvents: function() {
      var self = this;

      this.$link
        .off('click.wrongInfo')
        .on('click.wrongInfo', function(e) {
          e.preventDefault();

          self.setupForm();

          if (self.$link.attr('aria-expanded') === 'false') {
            self.openPanel();
          }
          else {
            self.closePanel();
          }
        });
    },
    setupForm: function() {
      var self = this,
          renderedHtml;

      if ($('[data-feedback-form-' + this.pk + ']').length) {
        return;
      }

      renderedHtml = nunjucks.render('feedback.html', {id: this.pk});

      this.$feedbackPanel = $(renderedHtml).insertAfter(this.$link);

      this.$link.attr('aria-controls', 'store-feedback-' + this.pk).attr('aria-expanded', 'false');
      this.$feedbackPanel.attr('aria-hidden', 'true');

      this.$closeButton = $('.btn-close', this.$feedbackPanel);
      this.$submitButton = $('button', this.$feedbackPanel);
      this.$form = $('form', this.$feedbackPanel);

      this.bindPanelEvents();
    },
    bindPanelEvents: function() {
      var self = this;

      this.$closeButton.on('click', function(e) {
        e.preventDefault();
        self.closePanel();
      });

      this.$form.on('submit.wrongInfo', function(e) {
        e.preventDefault();
        if (self.validateForm()) {
          self.sendFeedback();
        }
      });
    },
    fireRefreshEventOnWindow: function(){
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent('resize', true, false);
      window.dispatchEvent(evt);
    },
    openPanel: function() {
      this.$link.attr('aria-expanded', 'true');
      this.$feedbackPanel.attr('aria-hidden', 'false').find('textarea').focus();
      this.fireRefreshEventOnWindow();
    },
    closePanel: function() {
      this.$link.attr('aria-expanded', 'false');
      this.$feedbackPanel.attr('aria-hidden', 'true');
      this.fireRefreshEventOnWindow();
    },
    getMetadata: function() {
      return {
        pk: this.pk,
        store_name: $('[data-store-id=' + this.pk + '] .store-name').text(),
        store_address: $('#store-' + this.pk + ' .store-address').text(),
        store_latlng: $('[data-store-id=' + this.pk + ']').data('latlng'),
        search_query: $('#q').val()
      };
    },
    sendFeedback: function() {
      var self = this,
          message = $('[name=feedback]', this.$form).val();

      if (this.$submitButton.hasClass('btn-loading')) {
        return;
      }

      this.$submitButton.attr('disabled', true).addClass('btn-loading');

      $.ajax({
        url: 'https://doorbell.io/api/applications/' + this.defaults.doorbellId + '/submit?key=' + this.defaults.doorbellKey,
        data: {
          email: this.defaults.email,
          message: message,
          properties: this.getMetadata()
        },
        type: 'POST',
        success: function() {
          self.showSuccess();
        },
        error: function(xhr, error) {
          self.showError(null, "Your feedback could not be sent at this time. Please try again later.");
        },
        complete: function() {
          self.$submitButton.removeAttr('disabled').removeClass('btn-loading');
        }
      });
    },
    validateForm: function() {
      var formIsValid = true;

      this.$form.find('p.form-error').remove();
      this.$form.find('textarea').removeClass('invalid');

      if (this.$form.find('textarea').val().replace(/(^\s+|\s+$)/g, '') === '') {
        formIsValid = false;
        this.showError('feedback', 'Please tell us what is wrong with the information above');
      }

      return formIsValid;
    },
    showError: function(field, message) {
      var $field = $('[name=' + field + ']', this.$form),
          $error = $('<p class="form-error"></p>').text(message);

      if ($field.length) {
        $field.addClass('invalid').after($error);
      }
      else {
        this.$form.prepend($error);
      }

      this.fireRefreshEventOnWindow();
    },
    showSuccess: function() {
      var self = this;

      this.$form.replaceWith('<p class="thank-you">Thanks for helping us to improve our <span class="nowrap">Co-op</span> Finder.</p>');
      this.$closeButton.on('click', function(e) {
        e.preventDefault();
        self.$feedbackPanel.remove();
        self.$link
          .removeAttr('aria-expanded')
          .removeAttr('aria-controls');

        self.init(self.$link);
      });
    }
  };

  Coop.Modules.FeedbackWrongInfo = {
    init: function() {
      return $(selector).each(function() {
        $(this).data('FeedbackWrongInfo', new FeedbackWrongInfo($(this)));
      });
    }
  };
})();