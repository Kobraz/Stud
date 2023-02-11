const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c718b2dfccmsh0cbd42aac7fb08ep110b48jsnc0168724acac',
		'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
	}
};

fetch('https://flight-radar1.p.rapidapi.com/aircrafts/list', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));