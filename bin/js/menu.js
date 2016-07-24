"use strict"

function fs() {
    if (window.nativeWindow.stage.displayState == runtime.flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE) {
        window.nativeWindow.stage.displayState = runtime.flash.display.StageDisplayState.NORMAL;
    } else {
        window.nativeWindow.stage.displayState = runtime.flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE;
    }
}

window.onload = function(){
  var items = document.getElementsByTagName('li');

  for(var i=0; i<items.length; i++){
    items[i].addEventListener("click", function(e){
      window.open(e.target.getAttribute("data-src"), "_self");
    });

    items[i].addEventListener("mouseover",function(e){
      e.target.innerHTML = e.target.getAttribute("data-content");
      e.target.setAttribute('class', 'bgi-none');
    })

    items[i].addEventListener("mouseout",function(e){
      e.target.innerHTML = e.target.getAttribute("data-list");
      e.target.setAttribute('class', 'bgi-u'+ e.target.getAttribute("data-num"));
    })
  }


}
