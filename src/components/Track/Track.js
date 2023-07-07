import React from 'react'
import Button from '../Button/Button'
export default function Track({track, listType, addTrack, removeTrack}) {

  let buttonType = null;
  if(listType === "tracklist") {
    buttonType = <Button name="add" value="+" onClickAddTrack={addTrack} track={track} style={{backgroundColor:"#90EE90", padding:"5px 5px"}}/>;
  }else{
    buttonType = <Button name="remove" value="-" onClickRemoveTrack={removeTrack} track={track} style={{backgroundColor:"#FFCBCB", padding:"5px 5px"}}/>;
  }

 
  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {track.name} 
          </div>
          <div className="col-md-2 d-flex justify-content-end">
            {buttonType}
          </div>
        </div>
      </div>   
    </li>
  )
}
