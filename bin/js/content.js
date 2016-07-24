"use strict"

function openFile(url){
  var file= air.File.applicationDirectory.resolvePath(url);
  file.openWithDefaultApplication();
}

window.onload = function(){
  var items = document.getElementsByTagName('li');

  for (var i = 0 ; i < items.length ; i++) {
    items[i].setAttribute("title", items[i].lastChild.textContent);
  }
}
