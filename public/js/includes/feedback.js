(function() {

  'use strict';

  window.Coop = window.Coop || { Modules: {} };

  Coop.Modules.feedbackForm = {
      toggles:null,
      toggleContent:null,
      formPosition:null,
      init:function(){
          if($('#FeedbackForm .error').length)   // don't run if form-error
              return;

          this.toggles = $('#FeedbackForm input[type="radio"]');
          this.toggleContent = $('#FeedbackForm .slide-toggle-content');
          this.toggleContent.addClass('init').removeClass('open').attr({tabindex:'-1','aria-hidden':'true','aria-live':'polite'});
          this.bindEvents();
      },
      bindEvents:function(){
          var self = this;

          this.toggles.change(function(){
              self.formPosition = $('#FeedbackForm').offset().top;
              self.toggleContent.slideDown(300).addClass('open').attr('aria-hidden','false');
              $('html, body').animate({scrollTop:self.formPosition}, 300);
          });
      }
  };
}());