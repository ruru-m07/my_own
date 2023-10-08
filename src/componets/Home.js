// import React from "react";
import Hello from "../img/hello.png";
import Myself from "./Myself";
import About from "./About";


const Home = () => {
  return (
    <>
      <div className="homemain homemainfc">
        <div className="routet">
          <img className="circle1" src={Hello} alt="hello" />
        </div>
        <div className="homepagetext">
          <h1>
            <span className="firstthame"> Hello </span>
            <span className="secthame">there!</span>
          </h1>
          <h2>Welcome To My Site. 🖤 </h2>
        </div>
      </div>
      <Myself />
      <About />
    </>
  );
};

export default Home;
