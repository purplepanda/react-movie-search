import React, { useState }  from 'react';
import MovieTile from '../movieTile/movieTile';
import SearchService from '../../services/search.service';

const Search = () => {
	const [searchValue, updateSearchValue] = useState('');
	const [searchResults, updateSearchResult] = useState([]);
	const [errorMsgValue, updateErrorMsgValue] = useState(null);
	const searchService = new SearchService();

	const submitMovieSearch = () => {
		searchService.movieSearch(searchValue, handleSearchSuccess, handleSearchFailure);
	}

	const handleSearchFailure = (res) => {
		updateErrorMsgValue(`${res.Error} Try Again!`);
		updateSearchResult([]);
	}

	const handleSearchSuccess = (res) => {
		updateErrorMsgValue('');
		updateSearchResult(res.Search);
	}

	const handleSearchInputChanges = (e) => {
		updateSearchValue(e.target.value);
	}

	return (
		<div className='search'>
			<div className='search__bar'>
				<label htmlFor='search'>Find Something to Watch ...</label>
				<input 
					id='search'
					name='search'
					type='text'
					onChange={handleSearchInputChanges} 
					value={searchValue}
				/>
				<input
					id='submit'
					type='submit'
					onClick={submitMovieSearch}
					placeholder='Search' />
			</div>

			<div className='search__list'>
				{searchResults.length > 0 ?
					searchResults.map((movie) => {
						return <>
							<li key={movie.imdbID}>
								<MovieTile props={movie}></MovieTile>
							</li>
						</>
					})
				: null}
			</div>

			{!!errorMsgValue ? 
				<div className='search__error'>
					<p>{errorMsgValue}</p>
				</div>
			: null}

		</div>
	);
};

export default Search;
