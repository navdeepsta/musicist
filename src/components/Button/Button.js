import React from 'react'

export default function Button(props) {
  const handleClick = (event) => {
    if(props.name === "add") {
      props.onClickAddTrack(props.track);
    }
    if(props.name === "remove") {
      props.onClickRemoveTrack(props.track);
    }
    if(props.name === "Save To Spotify") {
      props. onClickSaveToSpotify();
    }
  }
  return (
    <button onClick={handleClick} style={props.style}>{props.value}</button>
  )
}
