function coopCheckRadio(input) {
  if (!input) return;

  var inputs = document.querySelectorAll('.coop-c-checkbox-radio__input');
  var labels = document.querySelectorAll('.coop-c-checkbox-radio__label');
  var group = document.querySelectorAll('.coop-c-checkbox-radio');
  var checkboxes = [];
  var radios = [];

  function removeClassName(e,t) {
    if (typeof e == 'string') {
      e = xGetElementById(e);
    }
    var ec = ' ' + e.className.replace(/^\s+|\s+$/g,'') + ' ';
    var nc = ec;
    if (ec.indexOf(' '+t+' ') != -1) {
      nc = ec.replace(' ' + t + ' ',' ');
    }
    e.className = nc.replace(/^\s+|\s+$/g,'');
    return true;
  }

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'checkbox') {
      checkboxes.push(inputs[i]);
      if (inputs[i].checked) {
        checked.push(inputs[i]);
      }
    }
    if (inputs[i].type == 'radio') {
      radios.push(inputs[i]);
      if (inputs[i].checked) {
        checked.push(inputs[i]);
      }
    }
  }

  for (var j = 0; j < checkboxes.length; j++) {
    checkboxes[j].onclick = function() {
      if (this.checked == true) {
        this.parentElement.className += ' coop-js-is--selected';
      } else {
        removeClassName(this.parentElement, 'coop-js-is--selected');
      }
    }
  }

  var prev = null
  for (var r = 0; r < radios.length; r++) {
    radios[r].onclick = function(e) {
      if(prev != this) {
        if(prev !== null) {
          prev.parentElement.classList.remove('coop-js-is--selected')
        }
        this.parentElement.className += ' coop-js-is--selected';
        prev = this
      }
    }
  }

}

export default coopCheckRadio;
