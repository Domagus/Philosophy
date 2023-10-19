// show more button

const showMoreButtons = document.getElementsByClassName("show-epitomes-button");
const epitomeSets = document.getElementsByClassName("epitome-set");

for (let i = 0; i < showMoreButtons.length; i++) {
	showMoreButtons[i].addEventListener('click', function () {
	  // Toggle the display property for the corresponding epitome-set
	  if (epitomeSets[i].style.display === 'none' || epitomeSets[i].style.display === '') {
		epitomeSets[i].style.display = 'block';
	  } else {
		epitomeSets[i].style.display = 'none';
	  }
	});
  }