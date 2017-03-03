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




} //end of calc function

$("#submitbutton").click(calc)
