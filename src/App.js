import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './components/Authentication/Login';
import Homepage from './containers/Homepage';
import { setUrlToken } from './spotify'


function App() {
  const [token, setToken] = useState("");

  useEffect(()=>{
    const token = window.localStorage.getItem("spotifyAccessToken");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash) {
      const access_token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("spotifyAccessToken", access_token);
      window.localStorage.setItem("spotifyExpiresIn", 3000);
      setToken(access_token);
      setUrlToken(access_token);
      tokenExpiration();
    }else{
      setUrlToken(token);
      setToken(token);
    }
  }, [])

  const tokenExpiration = () => {
    const expiresIn = localStorage.getItem('spotifyExpiresIn');
    console.log(expiresIn);
    const expirationTime = Number(expiresIn) * 1000;

    const id = setTimeout(() => {
      handleLogout();
      clearTimeout(id);
    }, expirationTime);
  };

  const handleLogout = () => {
    localStorage.removeItem('spotifyAccessToken');
    localStorage.removeItem('spotifyExpiresIn');
    setToken("");
    window.location.href = '/login'; 
  };


  return (
   <>
      {!token ? <Login /> : <Homepage />}
   </> 
  );
}

export default App;
