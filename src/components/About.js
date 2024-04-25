import React from "react";
import Links from "./Links";

function About(props) {
  const {github, linkedin, bio} =props;
  if (bio && bio.trim() !==''){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  <Links github={props.github} linkedin={props.linkedin} />
  </div>);
  }else {
    return (
      <div>
        <h2>About Me</h2>
        <Links github={props.github} linkedin={props.linkedin} />
      </div>
    );
  }
}

export default About;
