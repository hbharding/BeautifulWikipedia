// $('body').append('')


function cleanUp() {
  $('link[rel=stylesheet]').remove();
  $('style').remove();
  $('*').not('table').removeAttr('style');
}


$(document).ready(function (){
  cleanUp();
});
