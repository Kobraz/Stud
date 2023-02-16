const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c718b2dfccmsh0cbd42aac7fb08ep110b48jsnc0168724acac',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

fetch('https://car-data.p.rapidapi.com/cars?limit=50&page=0&make=Honda', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

console.log(response);
		


