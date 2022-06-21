import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Dalia Etessami</div>
            <div className="brief_description">
              Hi! I study Computer Science and Visual Arts at Columbia University.
              This summer I have an internship designing marketing material for a small
              business which I really enjoy!
              I love creating art and making crafts like bracelets and shrinky dinks in my free time.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

