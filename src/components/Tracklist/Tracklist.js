import React from 'react'
import List from '../List/List'
export default function Tracklist(props) {
  return (
    <div>
      <h5>Track Results</h5>
      <List tracks={props.tracks} listType={props.listType} addTrack={props.addTrack}/>
    </div>
  )
}
