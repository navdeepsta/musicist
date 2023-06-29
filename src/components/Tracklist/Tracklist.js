import React from 'react'
import List from '../List/List'
export default function Tracklist(props) {
  return (
    <div>Search Result
      <List tracks={props.tracks} listType={props.listType} addTrack={props.addTrack}/>
    </div>
  )
}
