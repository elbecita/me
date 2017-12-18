'use strict';

import React from 'react';

const Projects = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <div className="card-block shadow">
          <a href="https://github.com/elbecita/icebreaker.io" target="_blank"><h4 className="card-title">icebreaker.io</h4></a>
          <p>Enables peer-to-peer real-time communications, using WebRTC technology.</p>
          <p className="font-bold"><a href="apps/icebreaker" target="_blank">Try it!</a></p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
