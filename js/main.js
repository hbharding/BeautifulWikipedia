

var compilePage = function (page) {
	
	//scrape all the data
      var ignore = [
       						'.infobox',
        					'.ambox',
        					'#toc'
     							 ].toString(),
		  menuData = {
     	 						logo: chrome.extension.getURL('../assets/imgs/wikipedia.png'),
     	 						menu: $('#mw-panel').html(),
									donate: $('#n-sitesupport').html()
     						 },
			articleData = {
									account: $('#p-personal').html(),
									search: $('#p-search').html(),
									menu: $('#mw-panel').html(),
									title: $('#firstHeading').text(),
									tableOfContents : $('#toc').html(),
									infoCard: $('.infobox').html(),
									content: $('#mw-content-text').children().remove( ignore ).parent().html(),
								};

			
	//original code begone!	
	$('body').html('');

	//build the menu template
  $.get(chrome.extension.getURL('../templates/menu.html'), function(template) {
    var template = $(template).filter('#menuTemplate').html();
    $('body').append(Mustache.render(template, menuData));
  });

//build the article template
	$.get(chrome.extension.getURL('../templates/article.html'), function(template) {
      var template = $(template).filter('#articleTemplate').html();
       $('body').append(Mustache.render(template, articleData));
      //$('.content').children('p')[0].addClass('big');

  });

};


$(document).ready(function() {
  compilePage();
});
