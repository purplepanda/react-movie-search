import { render, screen } from '@testing-library/react';
import Search from '../search/search';

test('it renders search component', () => {
	render(<Search/>);

	const searchInputLabel = screen.getByText('Find Something to Watch ...');
	const submitInputLabel = screen.getByPlaceholderText('Search');

	expect(searchInputLabel).toBeInTheDocument();
	expect(submitInputLabel).toBeInTheDocument();
});
