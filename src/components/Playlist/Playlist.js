import React from 'react'
import Button from '../Button/Button'
import List from '../List/List'
import styles from './Playlist.module.css'

export default function Playlist(props) {
  const {onChangePlaylistName, playlistName} = props;
  const handleChange = ({target})=>{
    onChangePlaylistName(target.value);
  }

  return (
    <div>
      <input 
        className = {styles.border}
        placeholder = "Playlist name"
        onChange = {handleChange}
        value = {playlistName}
      />
      <List tracks={props.tracks} listType={props.listType} removeTrack={props.removeTrack}/> 
      <Button name="Save To Spotify"/>
    </div>
  )
}
