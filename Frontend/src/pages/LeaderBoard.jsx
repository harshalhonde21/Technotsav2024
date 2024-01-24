import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://backendtechno-ptyr.onrender.com/api/departments");
        const shuffledData = response.data.sort(() => Math.random() - 0.01);
        setLeaderboardData(shuffledData);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error.message);
      }
    };

    fetchData();
  }, [leaderboardData]); 

  return (
    <Fragment>
      <div className="home-containers">
        <div className="background-images">
          <img src="/LeaderBoardPage/wallpaperflare 1.png" alt="Background" />
          <div className="leaderBoard-container">
            <h1 className="heading-leader">Points Table</h1>

            <div className="leaderboard-rows">
              {leaderboardData.map((row, index) => (
                <div className="leaderboard-row" key={index}>
                  <div className="row-number">{index + 1}</div>
                  <div className="row-text">{row.departmentName}</div>
                  <div className="row-points">{row.departmentScore}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LeaderBoard;
