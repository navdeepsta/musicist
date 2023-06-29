import React from 'react'
import Button from '../Button/Button'
import List from '../List/List'
export default function Playlist(props) {
  return (
    <div>Playlist
      <List tracks={props.tracks}/> <Button name="Save To Spotify"/>
    </div>
  )
}
