// a good practice is to read the apikey from a .env file
// but for this project it is hardcoded for simplicity
const apiKey = "9sOx2d1gWYZrKY0uD4hCbOMIQzLcL4KQ";
const apiUrl = "https://api.apilayer.com/fixer/latest";

const requestOptions = {
	method: "GET",
	headers: {
		apikey: apiKey,
	},
};

// this function is used to create a REST GET quest to predefined url and apikey
// the response is in json and returned without modification
const fetchData = async () => {
	return fetch(apiUrl, requestOptions)
		.then((response) => {
			// cehck if response status is ok
			if (!response.ok) {
				throw new Error("Failed to fetch data from API");
			}
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
};

export { fetchData };
