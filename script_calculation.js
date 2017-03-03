function calc() {

    var insurance = {
        familyname: document.getElementById("familyname").value,
        firstname: document.getElementById("firstname").value,
        age: document.getElementById("age").value,
        gender: $('input[name=gender]:checked', '#genderform').val(),
        country: $('input[name=country]:checked', '#countryform').val(),
        ps: document.getElementById("ps").value,
    };
    console.log(insurance.gender + insurance.country)

    var standardprice = 50;
    var priceage;
    var pricegender;
    var pricecountry;
    var priceps;

    var insurancequote = function() {



//age
            if (Number(insurance.age) < 25) {
                priceage = Math.round((Number(standardprice) * 1.5));
                console.log("you are under 25. Your price is: " + priceage);
            } else {
                if (Number(insurance.age) >= 25) {
                    priceage = Math.round(Number(standardprice));
                    console.log("you are at least 25. Your price is: " + priceage);
                } else { //not a number
                    alert("Please enter your age as a number!")
                } //end of second else
            } //end of first else

//gender
            if (insurance.gender == "female") {
                pricegender = Math.round((priceage * 1.1));
                console.log("you are female. Your price is: " + pricegender);
            } else {
                pricegender = Math.round((priceage * 1));
                console.log("you are male. Your price is: " + pricegender);
            } //end of else

//coutry
            if (insurance.country == "Other") {
                pricecountry = Math.round((pricegender * 1.2));
                console.log("you are not from the EU. Your price is: " + pricecountry);
            } else {
                pricecountry = Math.round(pricegender);
                console.log("you are from the EU. Your price is: " + pricecountry);
            } //end of else
//PS
            switch (true) {
                case (Number(insurance.ps)<60):
                    priceps = Math.round(pricecountry);
                console.log("You have less than 60PS. Your price is: " + priceps);
                    break;
                case (Number(insurance.ps)<90):
                    priceps = Math.round((pricecountry*1.1));
                console.log("You have less than 90PS. Your price is: " + priceps);
                    break;
                case (Number(insurance.ps)<120):
                    priceps = Math.round((pricecountry*1.3));
                console.log("You have less than 120PS. Your price is: " + priceps);
                    break;
                case (Number(insurance.ps)<150):
                    priceps = Math.round((pricecountry*1.4));
                console.log("You have less than 150PS. Your price is: " + priceps);
                    break;
                case (Number(insurance.ps)<200):
                    priceps = Math.round((pricecountry*1.8));
                console.log("You have less than 200PS. Your price is: " + priceps);
                    break;
                case (Number(insurance.ps)>=200):
                    priceps = Math.round((pricecountry*2));
                console.log("You have more than 200PS. Your price is: " + priceps);
                    break;
                default:
                    alert("Please enter PS as a number!")
            }

            console.log("final price is "+priceps)
        } //end of insurancequote function 
    insurancequote()

var anrede = function () {
	if (insurance.gender=="male") {
		document.getElementById("insurancetext").innerHTML = "<p>Dear Mr. " +insurance.firstname +" "+insurance.familyname+" based on the data entered in our form. We could calculate a monthly insurance quote of <b>"+priceps+"€</b> for you!</p><p> If you are interested in this offer you can book it now! </p> <br> <a href='#'><img src='pictures/bookhere.png' alt='bookhere' id='bookhere'></a>" ;

	} else {
		document.getElementById("insurancetext").innerHTML = "<p>Dear Mrs. " +insurance.firstname +" "+insurance.familyname+" based on the data entered in our form. We could calculate a monthly insurance quote of <b>"+priceps+"€</b> for you!</p><p> If you are interested in this offer you can book it now! </p> <br> <a href='#'><img src='pictures/bookhere.png' alt='bookhere' id='bookhere'></a>" ;
	} //end else
}//end function anrede
anrede();
document.getElementById("insuranceheading").textContent = "Your insurance quote has been calculated!";




} //end of calc function

$("#submitbutton").click(calc)

