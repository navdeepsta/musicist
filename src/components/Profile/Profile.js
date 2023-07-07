import React, {useState, useEffect } from 'react'
import apiURL from '../../spotify';
import Timer from '../Timer/Timer';
export default function Profile(props) {
  
  const [tracks, setTracks] = useState(null);

  useEffect(()=>{
    apiURL.get("search?q=alone&type=track")
      .then(response => {
          setTracks(response.data.tracks.items);
          console.log(response.data.tracks.items);
       })
       .catch(error=>{
            
       })
  }, [])

  return (
    <div>
      Albums   
      {tracks && tracks.map((track)=>{
        return <>{track.album.name}<br /></>
      })}
    </div>
  )
}
