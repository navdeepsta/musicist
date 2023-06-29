import React from 'react'
import List from '../List/List'
export default function Tracklist(props) {
  return (
    <div>Tracklist
      <List tracks={props.tracks}/>
    </div>
  )
}
