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
            <p align="justify">Oh hey! My name is Maria Fernandez Hernandez and this is my personal website, welcome!</p>
            <p align="justify">I guess you're here because you want to know a little bit more about me. Well, I'm a Software Engineer,
              born, and raised, in Spain with an adventurous soul that thinks the idea of moving and discovering new cultures is extremely fun!</p>
            <p align="justify">{`I've been working in the Software industry since 2012 when I finished my Computer Science
              Engineering degree at the Polytechnic University of Valencia. I started working with .NET technology, but switched after a while
              to JavaScript; a language that I quickly fell in love with. My goal since I began using JavaScript has been to become an
              expert on it; always on the the path towards that, always learning, and always having fun. Of course, I've also worked with many other
              technologies. If you're curious, you'll be able to see more details about my background in my `}
              <a href="public/maria_fernandez_resume.pdf" target="_blank">resume</a>.</p>
            <hr />
            <p align="justify">The whole idea about this website is to start sharing with the world the
              things I work on during my free time. Don't be shy, scroll down a bit and you'll find my projects there. Keep checking back
              as more projets are uploaded.</p>
            <p align="justify">Also, if you want to contact me, just jump into any of my social profiles and send me a message. :)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;