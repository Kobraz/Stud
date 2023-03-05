let response = "";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c718b2dfccmsh0cbd42aac7fb08ep110b48jsnc0168724acac',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

fetch('http://api.fakeshop-api.com', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

console.log(response);
		


