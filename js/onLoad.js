
function cleanUp() {
  $('link[rel=stylesheet]').remove();
  $('style').remove();
  $('*').not('table').removeAttr('style');
}


$(document).ready(function (){
  // $('body').append('<div class="page-loading"></div>');
  cleanUp();
});
