import { useState } from "react";

const About = (props) => {

  const [aboutSubtitle, setAboutSubtitle] = useState("Welcome");

  return (
    <div>
      <h3>{props.aboutTitle}</h3>
      <p>{aboutSubtitle}</p>
    </div>
  );
};

export default About;
