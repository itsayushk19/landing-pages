function myFunction() {
    var x = document.getElementById("pn_navmenu");
    var y = document.getElementById("pn_navfluid");
    if (x.className === "pn_navmenu") {
      x.className += " responsive";
      y.className += " responsive";
    } else {
      x.className = "pn_navmenu";
    }
  }