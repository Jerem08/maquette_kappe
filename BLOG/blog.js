// external js: isotope.pkgd.js

$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 0
  }
});

// sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
