//для мобильной версии
//document.querySelector('#btn0').onclick = showCloseNav0
document.getElementById("btn0").addEventListener("click", function() {
  showCloseNav0()});


//для обычной версии
//document.querySelector('#rozetka').onclick = showCloseNav1;
//document.querySelector('#switcher').onclick = showCloseNav2;
//document.querySelector('#longer').onclick = showCloseNav3;
//document.querySelector('#box').onclick = showCloseNav4;





document.getElementById("rozetka").addEventListener("click", function() {
  CloseNav()});
document.getElementById("rozetka").addEventListener("click", function() {
  showCloseNav1()});


document.getElementById("switcher").addEventListener("click", function() {
  CloseNav()});
document.getElementById("switcher").addEventListener("click", function() {
  showCloseNav2()});


document.getElementById("longer").addEventListener("click", function() {
  CloseNav()});
document.getElementById("longer").addEventListener("click", function() {
  showCloseNav3()});


document.getElementById("box").addEventListener("click", function() {
  CloseNav()});
document.getElementById("box").addEventListener("click", function() {
  showCloseNav4()});

document.getElementById("about").addEventListener("click", function() {
  CloseNav()});
document.getElementById("about").addEventListener("click", function() {
  showCloseNavAb()});

document.getElementById("contacts").addEventListener("click", function() {
  CloseNav()});
document.getElementById("contacts").addEventListener("click", function() {
  showCloseNavCon()});



function showCloseNav0() {
  let x = document.querySelector('.site-nav0');  //показать\скрыть меню навигации, 
  if (x.style.left === '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
}

function showCloseNav1() {

  let x = document.querySelector('#nav-rozetka');  //показать\скрыть меню навигации, 
  if (x.style.left === '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
}

function showCloseNav2() {
  let x = document.querySelector('#nav-switcer');  //показать\скрыть меню навигации, 
  if (x.style.left === '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
}


function showCloseNav3() {
  let x = document.querySelector('#nav-longer');  //показать\скрыть меню навигации, 
  if (x.style.left === '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
}

function showCloseNav4() {
  let x = document.querySelector('#nav-box');  //показать\скрыть меню навигации, 
  if (x.style.left === '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
}

function showCloseNavAb() {
  let x = document.querySelector('#nav-about');  //показать\скрыть меню навигации, 
  if (x.style.left === '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
}


function showCloseNavCon() {
  let x = document.querySelector('#nav-contacts');  //показать\скрыть меню навигации, 
  if (x.style.left === '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
}



//закрыть все окна
function CloseNav() {
  let x = document.querySelector('#nav-rozetka'); 
  let y = document.querySelector('#nav-switcer'); 
  let z = document.querySelector('#nav-longer'); 
  let l = document.querySelector('#nav-box');
  let m = document.querySelector('#nav-about');
  let n = document.querySelector('#nav-contacts');

  
  
    x.style.left = '-100%';
    y.style.left = '-100%';
    z.style.left = '-100%';
    l.style.left = '-100%';
    m.style.left = '-100%';
    n.style.left = '-100%';
}



showCloseNav0();
showCloseNav1();
showCloseNav2();
showCloseNav3();
showCloseNav4();
showCloseNav();
showCloseNavAb();
showCloseNavCon();