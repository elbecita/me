'use strict';

import React from 'react';

const Projects = () => {
  return (
    <div className="card-deck">
      <div className="card project-card">
        <a href="apps/icebreaker" target="_blank"><span></span></a>
        <div className="card-block">
          <h4 className="card-title project-title font-bold">icebreaker.io</h4>
          <p>Enables peer-to-peer real-time communications, using WebRTC technology.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
