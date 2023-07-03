import React, {useState, useEffect } from 'react'
import apiURL from '../../spotify';
export default function Profile() {
  const [displayName, setDisplayName] = useState(null);

  useEffect(()=>{
    apiURL.get("me").then(response => setDisplayName(response.data.display_name));
  }, [])

  return (
    <div>Profile <h1>{displayName}</h1></div>
  )
}
