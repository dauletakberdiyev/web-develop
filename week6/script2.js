let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
var countriesSelect = document.getElementById("countries");
var citiesSelect = document.getElementById("cities");

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.text = countries[i];
    countriesSelect.add(option);
}

let whichCountry;
countriesSelect.addEventListener("change", function(event) {
    whichCountry = event.currentTarget.value;
    let options = citiesSelect.querySelectorAll("option");
    for (let i = 0; i < options.length; i++){
        options[i].remove();
    }
    for (let i = 0; i < cities_by_country[whichCountry].length; i++) {
        let option = document.createElement("option");
        option.text = cities_by_country[whichCountry][i];
        citiesSelect.add(option);
    }
}) 