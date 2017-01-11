import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="whoami">
      <div className="container">
        <div className="info-about-me">
          <img src="https://s3-us-west-2.amazonaws.com/philinthekitchen/me.jpg" />
          <h2>Who Am I?</h2>
          <p>Hi, my name is Phil Flanagan. I adhere to a plant-based diet, which combines my three big passions: nutrition, cooking, and eating. Beyond the kitchen, I am a Web Developer.</p>
        </div>
      </div>
      </section>

      <section className="site-about">
        <div className="container">
          <h2>What is this Site About?</h2>
          <p> This site is meant to share healthful plant based recipes. While not every recipe on here is salt, oil, and sugar free and a few of the recipes may contain these items or other processed and refined ingredients, I try to make whole plant foods that corner stone of my diet. I also understanding the human element.</p>
        </div>
      </section>
    </div>
  );
}

export default About;
