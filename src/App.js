import React, { useState, useEffect } from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './containers/SearchResults';
import Login from './components/Autentication/Login';
import { setUrlToken } from './spotify'
function App() {
  const tracks =  [
   { uri : "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=45fa10227ce74abf"},
   { uri : "https://open.spotify.com/track/2QjOHCTQ1Jl3zawyYOpxh6?si=a83c7947125343cf"},
   { uri : "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb?si=0ab7529f55de470a"}
  ]
  
  const [token, setToken] = useState("");
  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash) {
      const access_token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", access_token);
      setToken(access_token);
      setUrlToken(access_token);
    }else{
      setUrlToken(token);
      setToken(token);
    }
  }, [])

  if(!token) {
    return <Login />;
  }
  else{
    return (
      <div className="App">
        <Profile />
        <SearchBar />
        <SearchResults tracks={tracks}/>
      </div>
    );
  }                 
}

export default App;
