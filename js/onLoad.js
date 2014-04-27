// $('body').append('')


function cleanUp() {
  $('link[rel=stylesheet]').remove();
  $('style').remove();
  $('*').removeAttr('style');
}


$(document).ready(function (){
  cleanUp();
});
