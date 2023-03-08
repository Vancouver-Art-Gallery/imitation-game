// Use this file to add custom JavaScript
//
// A number of JavaScript functions and libraries are included with Quire,
// to see which ones, check the files in themes/quire-starter-theme/source/js // and the list of dependencies in themes/quire-starter-theme/package.json

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}