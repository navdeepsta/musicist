import React from 'react'

export default function Button(props) {
  const handleClick = (event) => {
    if(props.name === "add") {
      props.onClickAddTrack(props.track);
    }
    if(props.name === "remove") {
      props.onClickRemoveTrack(props.track);
    }
  }
  return (
    <button onClick={handleClick} >{props.name}</button>
  )
}
