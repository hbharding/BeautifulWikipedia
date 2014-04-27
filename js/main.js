

var render = function () {

  $.get(chrome.extension.getURL('../templates/templates.html'), function(templates) {

      var template = $(templates).filter('#articleTemplate').html();
      var data = {
        title : $('#firstHeading').text(),
        content: $('#mw-content-text').remove( ".info-card" ).remove( ".metabox" ).html(),
        infoCard: $('.infobox.vcard').html(),
        tableOfContents : $('#toc').html()
      };

      console.log(data.content);

      $('body').html(Mustache.render(template, data));

  });

};

$(document).ready(function() {
  render();
});





// function loadTemplate() {
//   $.get(chrome.extension.getURL('../templates/article.mst'), function(template) {
//     console.log("loading template...")
//     // var rendered = Mustache.render(template, {'content': content});
//     // $('body').html(rendered).removeClass();
//   });
//
// }
//
// loadTemplate();
// $(document).ready(function() {
//     $('.loader').remove();
// });





// var req = new XMLHttpRequest();
// req.open("GET", chrome.extension.getURL('template.html'), true);
// req.onreadystatechange = function() {
//     if (req.readyState == 4 && req.status == 200) {
//         var image = chrome.extension.getURL('logo.jpg');
//         console.log('Rendering Mustache.js template...');
//         var tb = Mustache.to_html(
//             req.responseText,
//             {
//                 "imageURL": image,
//                 "num": 5
//             }
//         );
//         $('body').prepend(tb);
//     }
// };
// req.send(null);
