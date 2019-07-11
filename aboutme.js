function changeImage()
{
document.images["jsbutton"].src= "https://i.pinimg.com/originals/82/4f/84/824f84d100e5189a6b9d6607362772f1.jpg";
return true;
}
function changeImageBack()
{
 document.images["jsbutton"].src = "https://66.media.tumblr.com/fb99de4cdfeafa2066a08149093a2435/tumblr_oxirm34F471w8f1tco1_250.jpg";
 return true;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
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
