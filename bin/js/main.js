"use strict"

function fs() {
    if (window.nativeWindow.stage.displayState == runtime.flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE) {
        window.nativeWindow.stage.displayState = runtime.flash.display.StageDisplayState.NORMAL;
    } else {
        window.nativeWindow.stage.displayState = runtime.flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE;
    }
}

function back() {
    window.open("menu.html","_self");
}

window.onload = function(){
  var items = document.getElementsByTagName('a');

  for(var i = 0; i<items.length; i++){
    items[i].addEventListener("click", function(e){
      for(var j = 0; j<items.length; j++){
          items[j].innerHTML = items[j].parentNode.getAttribute("data-num");
          items[j].parentNode.setAttribute('class', 'unzrt');
      }
      e.target.innerHTML = e.target.parentNode.getAttribute("data-src");
      e.target.parentNode.setAttribute('class', 'zrt');
    });
  }
}
