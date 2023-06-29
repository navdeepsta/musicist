import React, {useState} from 'react'
import Tracklist from '../components/Tracklist/Tracklist'
import Playlist from '../components/Playlist/Playlist'

export default function SearchResults(props) {

  const [playlistName, setPlaylistName] = useState('');

  const handlePlaylistName = (name)=>{
    setPlaylistName(name);
  }

  return (
    <div>
      <Tracklist tracks={props.tracks}/>
      <Playlist 
        playlistName={playlistName} 
        onChangePlaylistName={handlePlaylistName} 
      />
    </div>
  )
}
