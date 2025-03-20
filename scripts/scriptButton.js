//Affiche à côté du nom son code binaire au "mousemove"

function getCursorElement() {

  let cursor = document.querySelector('#cursor');

  return cursor;

}

function toggleBin() {

  let geolineDenisseBin = document.querySelector('#author-bin');

  geolineDenisseBin.classList.toggle("displayInline");

}


//Méthode d'affichage : "mousemove"
cursor.addEventListener('mousemove', function () {


  toggleBin();


});





// faire apparaître les expériences et formations supplémentaires "+ de ..."

let xpAvenir = document.querySelector('#xp-avenir');
let cursAvenir = document.querySelector('#curs-avenir')



function toggleHiddenXp() {

  xpAvenir.classList.toggle("displayBlock");
}

function toggleHiddenCurs() {

  cursAvenir.classList.toggle("displayBlock");
}