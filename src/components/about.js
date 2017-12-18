'use strict';

import React from 'react';

const About = () => {
  return (
    <div className="container">
      <section id="about">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <img className="img-fluid shadow" src="public/img/maria_grand_canyon.png"/>
          </div>
          <div className="col-md-7">
            <h3 className="font-bold">About</h3>
            <hr />
            <p align="justify">Oh hey hello! My name is Maria Fernandez Hernandez (yes, funny surnames, uh?), and this is my personal website, welcome!</p>
            <p align="justify">I guess you're here because you want to know a little bit more about me. Well, I am a Software Engineer,
              born and raised in Spain, but with an adventurous soul that makes the idea of moving and discovering new cultures extremely attractive.</p>
            <p align="justify">{`I've been working in the Software industry since 2012, remarkable year when I finished my Computer Science
              Engineering degree at the Polytechnic University of Valencia. I started working with .NET technology, but switched after a while
              to Javascript, language that quickly got my <3. My main goal since I started using it for the first time has been to become an
              expert on it, and here we are! in the path towards that, always learning, always having fun. Of course, I've worked with many other
              technologies, you will be able to see more details about my background in my `}
              <a href="public/maria_fernandez_resume.pdf" target="_blank">resume</a> if you are curious.</p>
            <p align="justify">On other aspects, I love reading (mostly fantasy and sci-fi) and travelling (ok, yes, typical), I used
              to play videogames a lot when I was younger, but sadly free time when you're an adult is very little. I've been on & off during
              my whole life trying to learn how to play the guitar (and still there), and if I were rich I would start a brewery and study
              History, Philosophy and Physics degrees during my free time (and of course I'd continue coding on my personal projects!).</p>
            <p align="justify">Speaking about personal projects, the whole idea about this website was to start sharing with the world the
              things I work on during my free time, so don't be shy, scroll down a bit and you will find my projects there. The section
              will grow over time, I hope!</p>
            <p align="justify">Also, if you want to find me, just jump into any of my social profiles and send me a message. ^^</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;