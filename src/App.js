import './App.css';
import Search from './components/search/search';

function App() {
  return (
    <div className="App">
      <Search></Search>
      <header className="App-header">
        <ul>
          <li>search for a list of movies</li>
          <li>render a list of matching movie thumbnails</li>
          <li>select multiple movies from their searches</li>
          <li>confirm the list of movies they have selected</li>
        </ul>
        <p>The user flow should simulate a checkout like experience. Search for products, select products, confirm
selected products.</p>
        <p>For the search functionality create an API key at https://www.omdbapi.com</p>
      </header>
    </div>
  );
}

export default App;
