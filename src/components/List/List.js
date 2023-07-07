import React from 'react'
import Track from '../Track/Track'
import styles from './List.module.css'

export default function List(props) {
  return (
   <div className={styles.scrollable_list_wrapper}>
     <ul className="list-group">
        {
         props.tracks && props.tracks.map((track) => 
                              <Track   key={track.uri}
                                       track={track}
                                       listType={props.listType} 
                                       addTrack={props.addTrack} 
                                       removeTrack={props.removeTrack}
                              />
                        )
         }
                                            
     </ul>
     </div>
  )
}
