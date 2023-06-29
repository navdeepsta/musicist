import React from 'react'
import Button from '../Button/Button'
export default function Track({track, listType, addTrack, removeTrack}) {

  if(listType === "tracklist")
  return (
    <div>
      id:{track.id} | Title : {track.songTitle} | Artist : {track.artistName} | Album : {track.album} 
      <Button name="add" onClickAddTrack={addTrack} track={track} />
     
    </div>
  )

  if(listType === "playlist")
  return (
    <div>
       id:{track.id} | Title : {track.songTitle} | Artist : {track.artistName} | Album : {track.album} 
      <Button name="remove" onClickRemoveTrack={removeTrack} track={track} />
     
    </div>
  )
  
}
