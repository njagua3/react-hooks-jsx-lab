import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Hello! I am passionate about creating amazing web experiences. I enjoy
        working with modern technologies and solving complex problems through
        coding. When I'm not developing, you can find me exploring new places or
        reading about the latest tech trends.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
