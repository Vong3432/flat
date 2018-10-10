function openNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleBtn(x) {
	if( x == document.getElementById("dropbtn1"))
    {
    	document.getElementById("buyToggleContent").classList.toggle("show");
    	document.getElementById("sellToggleContent").classList.remove("show");
    }

    else if ( x == document.getElementById("dropbtn2") ) 
    {
    	document.getElementById("sellToggleContent").classList.toggle("show");
    	document.getElementById("buyToggleContent").classList.remove("show");
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

