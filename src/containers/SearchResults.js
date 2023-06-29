import React, {useState} from 'react'
import Tracklist from '../components/Tracklist/Tracklist'
import Playlist from '../components/Playlist/Playlist'

export default function SearchResults(props) {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  const handlePlaylistName = (name)=>{
    setPlaylistName(name);
  }

  const addTrackToPlaylist = (track)=>{
    if(!playlist.includes(track))
    setPlaylist((prev) => [track, ...prev]);
  }

  const removeTrackFromPlaylist = (track) => {
    if(playlist.includes(track))
    setPlaylist(playlist.filter( prev => prev.id !== track.id))
  }

  return (
    <div>
      <Tracklist tracks={props.tracks} listType="tracklist" addTrack={addTrackToPlaylist}/>

      <Playlist 
        playlistName = {playlistName} 
        onChangePlaylistName = {handlePlaylistName} 
        listType = "playlist"
        tracks = {playlist}
        removeTrack = {removeTrackFromPlaylist} />
    </div>
  )
}
