import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchLeaderboard = async () => {
    const res = await fetch("http://localhost:8080/api/leaderbord");
    const data = await res.json();
    setLeaderboard(data);
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 2000); // Auto-refresh every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>🏅 Leaderboard</h2>
        <h2>Total point</h2>
      <table className="leaderboard-table">
      
        <thead>
            
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
