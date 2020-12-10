import React, { useState } from 'react';
import CookieUtils from '../../utilities/cookies.utility';

const MovieTile = ({ props }) => {
	const [selected, setSelected] = useState(false);
	const tileClassName = !!selected ? 'tile tile--selected' : 'tile';
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
		<div className={tileClassName}>
			<button
				role='link'
				className='tile__btn'
				data-selected={selected}
				onClick={selectMovie}>

				<div className='tile__img'>
					<img src={props.Poster} alt={props.Title}/>
				</div>
				<div className='tile__title'>
					{props.Title} ({props.Year})
				</div>
			</button>
		</div>
	);
};

export default MovieTile;
