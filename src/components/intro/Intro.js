import "./Intro.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { init } from "ityped";
import { useEffect , useRef } from "react";

const Intro = () => {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vikram Boopathy</h1>
          <h3>
            React Js <span >Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <ArrowDownwardIcon className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
