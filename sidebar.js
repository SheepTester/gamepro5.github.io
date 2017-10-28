window.addEventListener("DOMContentLoaded",e=>{
  function cookie(prop,val) {
    try {
      var t=localStorage.getItem('gamepro5');
      if (t) t=JSON.parse(t);
      else {
        localStorage.setItem('gamepro5','{}');
        return window.location.reload();
      }
      if (typeof t!=='object') {
        localStorage.setItem('gamepro5','{}');
        return window.location.reload();
      }
      if (val!==undefined) {
        t[prop]=val;
        localStorage.setItem('gamepro5',JSON.stringify(t));
      } else return t[prop];
    } catch (e) {
      try {
        localStorage.setItem('gamepro5','{}');
        window.location.reload();
      } catch (e) {
        return null;
      }
    }
  }
  var btn=document.querySelector('.quickbtn'),
  sidebar=document.querySelector('.sidebar');
  if (btn&&sidebar) {
    btn.addEventListener("click",e=>{
      sidebar.classList.toggle('active');
    },false);
  }
  var accordionopeners=document.querySelectorAll('.accordion .opener');
  for (var i=0;i<accordionopeners.length;i++) {
    accordionopeners[i].addEventListener("click",function(e) {
      var accordion=this.parentNode;
      accordion.style.maxHeight=accordion.style.maxHeight?null:accordion.scrollHeight+'px';
      accordion.classList.toggle('active');
    },false);
  }
  accordionopeners=document.querySelectorAll('[data-opens]');
  for (var i=0;i<accordionopeners.length;i++) {
    var accordion=document.querySelector(accordionopeners[i].dataset.opens);
    if (accordion) {
      var showing=false;
      accordion.style.maxHeight=0;
      accordion.style.transition='all .2s';
      accordion.style.overflow='hidden';
      accordionopeners[i].addEventListener("click",function(e) {
        accordion.style.maxHeight=showing?0:accordion.scrollHeight+'px';
        showing=!showing;
      },false);
    }
  }
  var iframe=document.querySelector('#featured');
  if (iframe) {
    iframe.height=iframe.clientWidth*(500/850);
    window.addEventListener("resize",e=>{
      iframe.height=iframe.clientWidth*(500/850);
    },false);
  }
  var container=document.querySelector('.container'),
  openalert=document.querySelector('.alertopen'),
  alertelem=document.querySelector('.alert');
  if (alertelem&&openalert) {
    if (cookie('seen:'+alertelem.dataset.id)) container.classList.add('closedalert');
    else container.classList.remove('closedalert');
    alertelem.style.maxHeight=container.classList.contains('closedalert')?0:(alertelem.scrollHeight+40)+'px';
    openalert.addEventListener("click",e=>{
      container.classList.toggle('closedalert');
      alertelem.style.maxHeight=container.classList.contains('closedalert')?0:(alertelem.scrollHeight+40)+'px';
      cookie('seen:'+alertelem.dataset.id,true);
    },false);
  }
},false);
