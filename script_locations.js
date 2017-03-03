
var locations = [
    ["Vienna, 22", "pictures/location1.jpg", true],
    ["Vienna, 5", "pictures/location2.jpg", true],
    ["Innsbruck", "pictures/location3.jpg", true],
    ["Linz", "pictures/location4.jpg", true],
    ["Eisenstadt", "pictures/location5.jpg", false],
    ["Stockerau", "pictures/location6.jpg", false],
];

function filllocations () {
	var i = 0;
	while (i<locations.length) {
			var locationname = $(".locationname")[i];
			locationname.textContent = locations[i][0];
			var locationpicture = $(".locationpicture")[i];
			locationpicture.innerHTML = "<img src='" + locations[i][1] + "' alt='an image'>";
			var weekend1 = $(".weekend")[i];
			var weekend2 = $(".weekend2")[i];
			if (locations[i][2]==true){
			weekend2.innerHTML = "<img src='" + "http://www.essenmd.com/editor/uploads/files/sign-open-weekend.png" + "' alt='an image'>";
			} else {
			weekend1.textContent = "closed on weekends";
			}
			i++;
	} //end of while loop

} // end function locations

filllocations();


