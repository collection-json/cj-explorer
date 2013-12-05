/* cjex.js */

window.onload = function(){
  var pg = null;  
  pg = cjex();
  pg.init();
}

var cjex = function() {
  
  function init() {
    clearAll();
  }

  function clearAll() {
    var coll, i, x, elm;

    coll = document.getElementsByClassName("init");
    for(i=0,x=coll.length;i<x;i++) {
      coll.innerHTML = '';    
    }

    elm = document.getElementsByClassName("startingUrl")[0];
    if(elm) {
      elm.onsubmit = function(){go();return false;};
    }
  }

  function go() {
    var href;

    href = getStartingUrl();
    return false;
  }
  
  function getStartingUrl() {
    var elm, rtn;
    
    rtn = '';
    elm = document.getElementsByName('url')[0];
    if(elm) {
      rtn = elm.value;
    }
    return rtn;
  }

  var that = {};
  that.init = init;
  return that;
};
