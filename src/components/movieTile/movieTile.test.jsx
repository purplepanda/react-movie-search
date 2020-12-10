import { render, screen } from '@testing-library/react';
import MovieTile from '../movieTile/movieTile';

test('it renders movie tile', () => {
	const data = {
		Title: 'Movie Title',
		Year: '2020',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_SX300.jpg'
	}
	
	render(<MovieTile props={data}/>);

	const titleElement = screen.getByText(/Movie Title/i);
	const imgElement = screen.getByAltText(/Movie Title/i);

	expect(titleElement).toBeInTheDocument();
	expect(imgElement).toBeInTheDocument();
});
