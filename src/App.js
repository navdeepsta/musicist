import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './containers/SearchResults';
function App() {
  const tracks =  [{songTitle : "Nonstop",  artistName : "Drake", album: "Scorpion"},
                   {songTitle : "After dark",  artistName : "Drake", album : "Scorpian"},
                   {songTitle : "The Greatest",  artistName : "Sia", album : "This is Acting"},
                   {songTitle : "Alive",  artistName : "Sia", album : "This is Acting"},
                  ]
  return (
    <div className="App">
      <SearchBar />
      <SearchResults tracks={tracks}/>
    </div>
  );
}

export default App;
