

var compilePage = function (page) {

  $.get(chrome.extension.getURL('../templates/article.html'), function(template) {

      var ignore = [
        '.infobox',
        '.ambox',
        '#toc'
      ].toString();

      var template = $(template).filter('#articleTemplate').html();
      var data = {
				account: $('#p-personal').html(),
				search: $('#p-search').html(),
				menu: $('#mw-panel').html(),
        title: $('#firstHeading').text(),
        tableOfContents : $('#toc').html(),
        infoCard: $('.infobox').html(),
        content: $('#mw-content-text').children().remove( ignore ).parent().html(),
      };

      $('body').html(Mustache.render(template, data));
      $('.content').children('p')[0].addClass('big');

  });

  $.get(chrome.extension.getURL('../templates/menu.html'), function(template) {
    var template = $(template).filter('#menuTemplate').html();
    var data = {
      logo: chrome.extension.getURL('../assets/imgs/wikipedia.png'),
      menu: $('#mw-panel').html()
    };

    $('body').prepend(Mustache.render(template, data));
  });
};


$(document).ready(function() {
  compilePage();
});
