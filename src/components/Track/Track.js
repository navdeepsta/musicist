import React from 'react'
export default function Track({track}) {
  return (
    <div>
      Title : {track.songTitle} | Artist : {track.artistName} | Album : {track.album}
    </div>
  )
}
