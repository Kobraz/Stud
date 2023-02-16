const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c718b2dfccmsh0cbd42aac7fb08ep110b48jsnc0168724acac',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

const url = "https://car-data.p.rapidapi.com/cars?limit=50&page=0&make=Honda";

const resultsContainer = document.querySelector(".results");

async function getCars() {

	//fetch

	const response = await fetch(url, options);

	const results = await response.json();

	const facts = results.all;



	for (let i = 0; i < facts.length; i++) {
		console.log(facts[i].model);

		resultsContainer.innerHTML += "<div class='result'>${facts[i].model</div>";
	}

}

getCars();

