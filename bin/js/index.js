"use strict"

window.onload = function(){
  // window.nativeWindow.stage.displayState=runtime.flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE;

  var _urlRequest:URLRequest = new URLRequest(images/index.swf”);
  var _loader:Loader = new Loader();
  var _lc:LoaderContext = new LoaderContext(false, ApplicationDomain.currentDomain, null);
  _loader.load(_urlRequest, _lc);

  var enter = document.getElementById('enter');

  enter.addEventListener("click", function(e){
    window.open("menu.html","_self");
  });
}
