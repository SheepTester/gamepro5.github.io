(function() {
  'use strict';
  function css(elem,css) {
    for (var prop in css) elem.style[prop]=css[prop];
  }
  function drag(elem,fn) {
    elem.addEventListener("mousedown",e=>{
      var rect=elem.getBoundingClientRect(),
      offsetX=e.clientX-rect.left,
      offsetY=e.clientY-rect.top,
      move=e=>{
        fn(e.clientX-offsetX,e.clientY-offsetY);
        e.preventDefault();
        return false;
      },up=e=>{
        document.removeEventListener("mousemove",move,false);
        document.removeEventListener("mouseup",up,false);
        return move(e);
      };
      fn(e.clientX-offsetX,e.clientY-offsetY);
      document.addEventListener("mousemove",move,false);
      document.addEventListener("mouseup",up,false);
      e.preventDefault();
      return false;
    },false);
    elem.addEventListener("touchstart",e=>{
      var rect=elem.getBoundingClientRect(),
      offsetX=e.touches[0].clientX-rect.left,
      offsetY=e.touches[0].clientY-rect.top,
      move=e=>{
        fn(e.touches[0].clientX-offsetX,e.touches[0].clientY-offsetY);
        e.preventDefault();
        return false;
      },up=e=>{
        document.removeEventListener("touchmove",move,{passive:false});
        document.removeEventListener("touchend",up,{passive:false});
        e.preventDefault();
        return false;
      };
      fn(e.touches[0].clientX-offsetX,e.touches[0].clientY-offsetY);
      document.addEventListener("touchmove",move,{passive:false});
      document.addEventListener("touchend",up,{passive:false});
      e.preventDefault();
      return false;
    },false);
  }
  try {
    window.storage=localStorage;
  } catch (e) {
    window.storage={getItem(a){return this[a];},setItem(a,b){this[a]=b;},removeItem(a){delete this[a];}};
  }
  try {
    var t=JSON.parse(storage.getItem('gamepro5'));
    if (typeof t!=='object') localStorage.setItem('gamepro5','{}');
  } catch (e) {
    localStorage.setItem('gamepro5','{}');
  }
  function cookie(prop,val) {
    var t=JSON.parse(localStorage.getItem('gamepro5'));
    if (val!==undefined) {
      t[prop]=val;
      localStorage.setItem('gamepro5',JSON.stringify(t));
    } else return t[prop];
  }
  var thing=document.createElement("gamepro5-thing");
  css(thing,{
    backgroundImage:`url("https://gamepro5.github.io/images/gamepro5.png")`,
    display:'block',
    height:'40px',
    width:'40px',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    position:'fixed',
    borderRadius:'50%',
    left:cookie('thing:x')||'15px',
    top:cookie('thing:y')||'15px',
    cursor:'pointer'
  });
  // thing.addEventListener("click",e=>{
  //   window.location='https://gamepro5.github.io/';
  // },false);
  drag(thing,(x,y)=>{
    cookie('thing:x',thing.style.left=`${x}px`);
    cookie('thing:y',thing.style.top=`${y}px`);
  });
  window.addEventListener("DOMContentLoaded",e=>{
    document.body.appendChild(thing);
  },false);
}());
