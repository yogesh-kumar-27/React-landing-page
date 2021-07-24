import React from "react";

const About = (props) => {
  return (
    <>
      <div id="about">
        <div id="about-image">
          <img src={props.image} />
        </div>
        <div className="about-text">
          <h2>{props.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            corrupti ab illum ea deserunt error quae, similique eius possimus
            nam inventore dolorem voluptas, molestias repudiandae itaque
            accusamus perferendis? Unde facere ea aliquid rem, impedit esse!
            <button className="text button">{props.button}</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
