import React from 'react'
import Track from '../Track/Track'
export default function List(props) {
  return (
     <ul>
        {
         props.tracks.map((track, index) => 
                              <Track   key={track.songTitle + index}
                                       track={track}
                                       listType={props.listType} 
                                       addTrack={props.addTrack} 
                                       removeTrack={props.removeTrack}
                              />
                        )
         }
                                            
     </ul>
  )
}
