let makerOfCars = ["Toyota", "BMW", "Mercedes"];
let makerSelect = document.getElementById("makerCars");
let yearSelect = document.getElementById("yearCars");

for(let i = 0; i < makerOfCars.length; i++){
	let option = document.createElement("option");
	option.text = makerOfCars[i];
	makerSelect.add(option);
}

for(let i = 2018; i > 1998; i--){
	let option = document.createElement("option");
	option.text = i;
	yearSelect.add(option);
}