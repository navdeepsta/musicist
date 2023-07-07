import React, {useState, useEffect} from 'react'

import Tracklist from '../components/Tracklist/Tracklist'
import Playlist from '../components/Playlist/Playlist'
import SearchBar from '../components/SearchBar/SearchBar';
import apiURL from '../spotify'
import  {validateForEmptyValue, validatePlaylist, validateForUniqueName}  from '../components/Validators/Validators'

export default function Homepage(props) {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');  
  const [tracks, setTracks] = useState(null);
  const [trackName, setTrackName] = useState('');
  const [usedId, setUserId] = useState('');
  const [userSpotifyPlaylist, setUserSpotifyPlaylist] = useState([]);

  const trackNameCallback = (input) => {
    setTrackName(input);
  }

  useEffect(()=>{
    if(trackName)
    apiURL.get(`search?q=${trackName}&type=track`)
      .then(response => {
          setTracks(response.data.tracks.items);
       })
       .catch(error=>{
            
       })
  }, [trackName]);

  useEffect(()=>{
    apiURL.get("me")
    .then(response => {
      setUserId(response.data.id);
      return apiURL.get(`/users/${usedId}/playlists`)
    }).then(response => {setUserSpotifyPlaylist(response.data.items)})
    .catch(error=>{
            
    })
  }, [usedId]);

  const handlePlaylistName = (name)=>{
    // validate playlistName
    setPlaylistName(name);
  }

  const addTrackToPlaylist = (track)=>{
    if(!playlist.includes(track))
    setPlaylist((prev) => [track, ...prev]);
  }

  const removeTrackFromPlaylist = (track) => {
    if(playlist.includes(track))
    setPlaylist(playlist.filter( prev => prev.uri !== track.uri))
  }

  const savePlaylistToSpotify = () => {
    try {
      validateForEmptyValue(playlistName);
      validateForUniqueName(playlistName, userSpotifyPlaylist);
      validatePlaylist(playlistName, playlist);
      alert("Playlist has been saved to your account");
      savePlaylist();
      setPlaylistName("");
      setPlaylist([]);
    }catch(err){
      alert("Playlist "+ err.message)
    }
  }
  
  const savePlaylist = ()=> {
    // todo
  }

  return (
    <div>
      <SearchBar trackNameCallback={trackNameCallback}/>
      <div className="container-fluid bg-body">
       <div className="row" style={{height:"85vh"}}>
         <div className="col-md-6 d-flex justify-content-center p-1">
            <Tracklist tracks={tracks} listType="tracklist" addTrack={addTrackToPlaylist}/>
         </div>
         <div className="col-md-6 d-flex justify-content-center p-1">
            <Playlist 
              playlistName = {playlistName} 
              onChangePlaylistName = {handlePlaylistName} 
              listType = "playlist"
              tracks = {playlist}
              removeTrack = {removeTrackFromPlaylist} 
              saveToSpotify = {savePlaylistToSpotify}
            />
         </div>
        </div>
      </div>
    </div>
  )
}
