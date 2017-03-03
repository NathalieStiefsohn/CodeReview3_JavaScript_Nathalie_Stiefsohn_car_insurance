var employees = [
    ["Adrian Müller", "pictures/picture1.jpg", "adrian.mueller@carlife.com"],
    ["Erich Landsmann", "pictures/picture2.jpg", "erich.landsmann@carlife.com"],
    ["Stefan Hader", "pictures/picture3.jpg", "stefan.hader@carlife.com"],
    ["Igor Bauhaus", "pictures/picture4.jpg", "igor.bauhaus@carlife.com"],
    ["Guntram Mayer", "pictures/picture5.jpg", "guntram.mayer@carlife.com"],
    ["Sonja Igniz", "pictures/picture6.jpg", "sonja.igniz@carlife.com"],
]

console.log(employees[0][0]);

function allemployees () {
	for (i=0;i<employees.length;i++) {
			var name = $(".name")[i];
			name.textContent = employees[i][0];
			var picture = $(".picture")[i];
			picture.innerHTML = "<img src='" + employees[i][1] + "' alt='an image'>";
			var email = $(".email")[i];
			email.textContent = employees[i][2];
	} //end of first for loop

} // end function employees

allemployees();
