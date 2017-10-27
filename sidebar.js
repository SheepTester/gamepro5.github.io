window.addEventListener("DOMContentLoaded",e=>{
  var btn=document.querySelector('.quickbtn'),
  sidebar=document.querySelector('.sidebar');
  if (btn&&sidebar) {
    btn.addEventListener("click",e=>{
      sidebar.classList.toggle('active');
    },false);
  }
  var sidebaropeners=document.querySelectorAll('.accordion .opener');
  for (var i=0;i<sidebaropeners.length;i++) {
    sidebaropeners[i].addEventListener("click",function(e) {
      var accordion=this.parentNode;
      accordion.style.maxHeight=accordion.style.maxHeight?null:accordion.scrollHeight+'px';
    },false);
  }
},false);
