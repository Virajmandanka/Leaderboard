
import React, { useState, useEffect } from 'react';
import Userselecter from './userselecter';

function Point() {

 const [selectedUserId, setSelectedUserId] = useState('');
  const [points, setPoints] = useState(null);

  const handleClaim = async () => {
    if (!selectedUserId) return alert("Please select a user first.");
    const res = await fetch(`http://localhost:8080/api/user/${selectedUserId}`, {
      method: "POST",
    });
    const data = await res.json();
    if (res.ok) {
      setPoints(data.points);
    } else {
      alert("Error claiming points.");
    }
  };


    
  return (
    <div className="point-container">
      <Userselecter setSelectedUserId={setSelectedUserId} />
      <button onClick={handleClaim}>Claim Points</button>
      {points && <p className="point-message">🎉 You claimed {points} points!</p>}
    </div>
  )
}

export default Point