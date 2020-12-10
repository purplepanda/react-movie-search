import React, { useState } from 'react';
import CookieUtils from '../../utilities/cookies.utility';

const MovieTile = ({ props }) => {
	const [selected, setSelected] = useState(false);
	const tileClassName = !!selected ? 'tile--selected' : 'tile--deselected';
	const cookieUtils = new CookieUtils();

	const selectMovie = (e) => {
		e.preventDefault();
		setSelected(!selected);

		updateMovieList();
	}

	const updateMovieList = () => {
		if (!selected) cookieUtils.addToExistingCookieValue('movieList', props.Title);
		else cookieUtils.deleteFromExistingCookieValue('movieList', props.Title);
	}

	return (
		<div className='tile'>
			<button
				role='link'
				className={tileClassName}
				data-selected={selected}
				onClick={selectMovie}>

				<div className='tile__img'>
					<img src={props.Poster} alt={props.Title}/>
				</div>
				<div className='tile__title'>
					<h2>{props.Title} ({props.Year})</h2>
				</div>
			</button>
		</div>
	);
};

export default MovieTile;
