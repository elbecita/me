'use strict';

import React from 'react';

const About = () => {
  return (
    <div className="container">
      <section id="about" className="section">
        <div className="row justify-content-center">
          <div className="col-md-10 align-content-center">
            <h3 className="font-bold">About</h3>
            <hr />
            <p align="justify">Oh hey hello! My name is Maria Fernandez Hernandez and this is my personal website, welcome!</p>
            <p align="justify">I guess you're here because you want to know a little bit more about me. Well, I'm a Software Engineer,
              born and raised in Spain, but with an adventurous soul that makes the idea of moving and discovering new cultures extremely attractive.</p>
            <p align="justify">{`I've been working in the Software industry since 2012, remarkable year when I finished my Computer Science
              Engineering degree at the Polytechnic University of Valencia. I started working with .NET technology, but switched after a while
              to Javascript, language that quickly got my <3. My main goal since I started using it for the first time has been to become an
              expert on it, and here we are! in the path towards that, always learning, always having fun. Of course, I've worked with many other
              technologies. If you're curious, you'll be able to see more details about my background in my `}
              <a href="public/maria_fernandez_resume.pdf" target="_blank">resume</a></p>.
            <hr />
            <p align="justify">The whole idea about this website was to start sharing with the world the
              things I work on during my free time, so don't be shy, scroll down a bit and you'll find my projects there. The section
              will grow over time, I hope!</p>
            <p align="justify">Also, if you want to contact me, just jump into any of my social profiles and send me a message. :)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;