import React from 'react';

const MovieTile = ({ props }) => {
	return (
		<div className='tile'>
			<button
				role='link'
				className='tile'>

				<div className='tile__img'>
					<img src={props.Poster} alt={props.Title}/>
				</div>
				<div className='tile__title'>
					<h2>{props.Title} {props.Year}()</h2>
				</div>
			</button>
		</div>
	);
};

export default MovieTile;
