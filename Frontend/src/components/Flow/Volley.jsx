import { Fragment } from "react";
import "./Thug.css";

const Cricket = () => {
  

  return (
    <Fragment>
      <div id="particles-jss">
        <h1 className="heading-cricket">VOLLEY BALL TOURNAMENT</h1>
        <div className="team-list">
          <div className="all-team">
            <div className="team-box">Team 1</div>
            <p className="line"></p>
            <div className="team-box">Team 2</div>
            <p className="line2"></p>
            <p className="line-next"></p>
            <p className="line-next-next"></p>
            <p className="prev-next"></p>
            <div className="team-box">Team 3</div>
            <p className="line3"></p>
            <div className="team-box">Team 4</div>
            <p className="line4"></p>
            <p className="line-next2"></p>
            <p className="line-next-next2"></p>
            <p className="prev-next2"></p>
            <div className="team-box">Team 5</div>
            <p className="line5"></p>
            <div className="team-box">Team 6</div>
            <p className="line6"></p>
            <p className="line-next3"></p>
            <p className="prev-next3"></p>
            <div className="team-box">Team 7</div>
            <p className="line7"></p>
            <div className="team-box">Team 8</div>
            <p className="line8"></p>
            <p className="line-next4"></p>
            <p className="prev-next4"></p>
          </div>
          <div className="additional-container">
            <div className="team-box">Box 1</div>
            <p className="box-next"></p>
            <div className="team-box">Box 2</div>
            <p className="box-next2"></p>
            <div className="team-box">Box 3</div>
            <p className="box-next3"></p>
            <div className="team-box">Box 4</div>
            <p className="box-next4"></p>
          </div>
          <div className="semi-finals">
            <div className="team-box">Box 5</div>
            <div className="team-box">Box 6</div>
          </div>
          <div className="finals">
            <div className="team-box">Box 7</div>
          </div>
          {/* some new line very critical */}
          <p className="box-next-box1"></p>
          <p className="box-next-box2"></p>
          <p className="box-next-box3"></p>
          <p className="box-next-box4"></p>
          <p className="box-next-box5"></p>
          <p className="box-next-box6"></p>
        </div>
      </div>
    </Fragment>
  );
};

export default Cricket;