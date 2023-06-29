import React from 'react'
import Tracklist from '../components/Tracklist/Tracklist'
import Playlist from '../components/Playlist/Playlist'

export default function SearchResults(props) {
  return (
    <div>
      <Tracklist tracks={props.tracks}/>
      <Playlist tracks={props.tracks}/>
    </div>
  )
}
