export default class SearchService {
  movieSearch(query, success, failure) {
		fetch(`https://www.omdbapi.com/?s=${query}&apikey=15ecbb10`)
		.then(response => response.json())
		.then(jsonResponse => {
			if (jsonResponse.Response === 'True') {
				success(jsonResponse);
			} else {
				failure(jsonResponse);
			}
		});
  }
}
