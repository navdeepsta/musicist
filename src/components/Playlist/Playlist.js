import React,{useState} from 'react'
import Button from '../Button/Button'
import List from '../List/List'
import styles from './Playlist.module.css'
import  {validateInput, validatePlaylistInput}  from '../Validators/Validators'

export default function Playlist(props) {
  const {onChangePlaylistName, playlistName, saveToSpotify} = props;
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageFlag, setErrorMessageFlag] = useState(false);

  const handleChange = ({target})=>{
    try{
      onChangePlaylistName(target.value);
      validatePlaylistInput(target.value);
      setErrorMessageFlag(false);
    }catch(err) {
      setErrorMessageFlag(true);
      setErrorMessage(err.message);
    }
  }

  return (
    <div>
      <p className={styles.validation_error}>{errorMessageFlag ? errorMessage : ""}</p>
      <input 
        className = {styles.border}
        placeholder = "Playlist name"
        onChange = {handleChange}
        value = {playlistName}
      />
      <List tracks={props.tracks} listType={props.listType} removeTrack={props.removeTrack} style={{height:"500px"}}/> 
      <Button disabled={true} name="Save To Spotify" value="Save To Spotify" onClickSaveToSpotify={saveToSpotify} style={{backgroundColor: "green", color:"white"}}/>
    </div>
  )
}
 