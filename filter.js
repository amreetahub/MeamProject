alert("I'm logging shit");

var target = $('body *')
  .filter(':contains(class = img)')
  .filter(':not(:has(div))')
  .css({
    'background-color': "black",
    "color": "black",
    "-user-select": "none"
  });

target.children().css('visibility', 'hidden');

