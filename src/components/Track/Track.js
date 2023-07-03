import React from 'react'
import Button from '../Button/Button'
export default function Track({track, listType, addTrack, removeTrack}) {

  if(listType === "tracklist")
  return (
    <div>
      {track.uri} 
      <Button name="add" onClickAddTrack={addTrack} track={track} />
     
    </div>
  )

  if(listType === "playlist")
  return (
    <div>
      {track.uri} 
      <Button name="remove" onClickRemoveTrack={removeTrack} track={track} />
     
    </div>
  )
  
}
