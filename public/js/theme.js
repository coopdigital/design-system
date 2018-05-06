function responsiveInspector(size) {
  $('#breakpoint-viewer').removeClass('xsmall-width');
  $('#breakpoint-viewer').removeClass('small-width');
  $('#breakpoint-viewer').removeClass('medium-width');
  $('#breakpoint-viewer').removeClass('large-width');
  $('#breakpoint-viewer').removeClass('xlarge-width');
  if (size === 'xs') {
    $('#breakpoint-viewer').toggleClass('xsmall-width');
  } else if (size === 's') {
    $('#breakpoint-viewer').toggleClass('small-width');
  } else if (size === 'm') {
    $('#breakpoint-viewer').toggleClass('medium-width');
  } else if (size === 'l') {
    $('#breakpoint-viewer').toggleClass('large-width');
  } else if (size === 'xl') {
    $('#breakpoint-viewer').toggleClass('xlarge-width');
  } 
}
