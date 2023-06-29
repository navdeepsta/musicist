import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './containers/SearchResults';
function App() {
  const tracks =  [{id : 0, songTitle : "Nonstop",  artistName : "Drake", album: "Scorpion"},
                   {id : 1, songTitle : "After dark",  artistName : "Drake", album : "Scorpian"},
                   {id : 2, songTitle : "The Greatest",  artistName : "Sia", album : "This is Acting"},
                   {id : 3, songTitle : "Alive",  artistName : "Sia", album : "This is Acting"},
                  ]
  return (
    <div className="App">
      <SearchBar />
      <SearchResults tracks={tracks}/>
    </div>
  );
}

export default App;
